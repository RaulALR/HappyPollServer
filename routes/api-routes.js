const router = require('express').Router();
const midAuth = require('../middlewares/authentication-middleware')

const routerList = [
    {
        route: '/login',
        properties: ['post']
    },
    {
        route: '/register',
        properties: ['post']
    },
    {
        route: '/group',
        properties: ['post', 'get', 'put', 'delete']
    },
    {
        route: '/group/:id',
        properties: ['get']
    },
    {
        route: '/poll',
        properties: ['post', 'get', 'put', 'delete']
    },
    {
        route: '/poll/:id',
        properties: ['get']
    },
    {
        route: '/alerts',
        properties: ['get']
    }
];

router.get('/', function (req, res) {
    res.json(routerList);
});

//Login router
var loginController = require('../controllers/login-controller');
router.route('/login')
    .post(loginController.login);

//Users router
router.route('/users')
    .get(loginController.getUsers);

//Register user router
var registerUserController = require('../controllers/register-user-controller');
router.route('/register')
    .post(registerUserController.registerUser)
    .get(registerUserController.createToken);

//SSE alert
var sseAlertController = require('../controllers/sse-alert-controller');
router.route('/alerts')
    .get(sseAlertController.alerts);

//Group routes
var groupController = require('../controllers/group-controller');
router.route('/group')
    .post(groupController.saveGroup)
    .get(groupController.getGroups)
    .put(groupController.updateGroups)
    .delete(groupController.deleteGroup);
router.route('/group/:id')
    .get(groupController.getGroup)

//Poll routes
var pollController = require('../controllers/poll-controller');
router.route('/poll')
    .post(pollController.savePoll)
    .get(pollController.getPolls)
    .put(pollController.updatePolls)
    .delete(pollController.deletePoll);
router.route('/poll/:id')
    .get(pollController.getPoll)

module.exports = router;