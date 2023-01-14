const Post = require("./post");
const User = require("./User");
const Comment = require("./Comment");

User.hasMany(Post, {
    foreignKey:"user_id",
    onDelete: "CASCADE",
});

Post.belongsTo(User, {
    foreignKey: "user_id"
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
})

module.exports = { User, Post, Comment };