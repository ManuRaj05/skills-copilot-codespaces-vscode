function skillsMember()
{
    var member = require("../models/member");
    var skill = require("../models/skill");
    var memberSkill = require("../models/memberSkill");

    var router = express.Router();

    router.get("/skills", function(req, res) {
        member.findAll({
            include: [
                {
                    model: memberSkill,
                    include: [
                        {
                            model: skill
                        }
                    ]
                }
            ]
        }).then(function(members) {
            res.send(members);
        });
    });

    return router;
}