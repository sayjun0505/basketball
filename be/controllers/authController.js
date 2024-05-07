// const User = require('models/User');
const path = require('path');
const User = require(path.join(__dirname, '..', 'models', 'user'));
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
// const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    console.log(req.body);
    try {
        const { email, password } = req.body;


        // Find the user by email
        const user = await User.findOne({ email });

        // Verify the password
        // if (!user || !(await user.comparePassword(password))) {
        //     return res.status(401).json({ error: 'Invalid email or password' });
        // }

        // Generate a JWT token
        // const token = generateToken(user);

        // Prepare the response
        const response = {
            status: 200,
            data: {
                user: {
                    uid: 'user.id',
                    role: 'user.role',
                    data: {
                        displayName: 'user.displayName',
                        photoURL: 'user.photoURL',
                        email: 'user.email',
                        settings: 'user.settings',
                        shortcuts: 'user.shortcuts',
                    },
                },
                access_token: "token",
            },
            headers: {},
            config: {
                // Add any additional config information if needed
            },
            request: {
                responseURL: '/auth/login',
            },
        };

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.register = async (req, res) => {
    console.log(req.body);
    try {
        const { email, password, ...userData } = req.body;

        // Generate a unique ID for the user
        const uid = uuidv4();

        // Create a new user with the generated uid
        const user = new User({
            uid,
            email,
            password,
            ...userData,
        });

        await user.save();

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log(user, token);

        const data = {
            user: {
                uid: user.uid,
                role: 'user.role',
                data: {
                    displayName: user.displayName,
                    photoURL: user.photo,
                    email: user.email,
                    settings: 'user.settings',
                    shortcuts: 'user.shortcuts',
                },
            },
            access_token: token,
        };

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.logout = (req, res) => {
    // Implement the logout logic here
    res.json({ message: 'Logged out successfully' });
};

function generateToken(user) {
    // Implement your JWT token generation logic
    return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${JSON.stringify(user)}`;
}
