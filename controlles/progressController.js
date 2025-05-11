const Progress = require('../models/Progress');

exports.updateProgress = async (req, res) => {
  const { userId, courseId, progress } = req.body;
  const updated = await Progress.findOneAndUpdate(
    { userId, courseId },
    { progress },
    { upsert: true, new: true }
  );
  res.json(updated);
};

exports.getUserProgress = async (req, res) => {
  const { userId } = req.params;
  const progress = await Progress.find({ userId });
  res.json(progress);
};
