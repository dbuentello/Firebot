"use strict";

const {
    EffectTrigger
} = require("../../effects/models/effectModels");

const { OutputDataType, VariableCategory } = require("../../../shared/variable-contants");

let triggers = {};
triggers[EffectTrigger.EVENT] = ["twitch:channel-reward-redemption"];
triggers[EffectTrigger.MANUAL] = true;

const model = {
    definition: {
        handle: "rewardName",
        description: "The name of the reward",
        triggers: triggers,
        categories: [VariableCategory.COMMON],
        possibleDataOutput: [OutputDataType.TEXT]
    },
    evaluator: (trigger) => {
        return trigger.metadata.eventData.rewardName;
    }
};

module.exports = model;
