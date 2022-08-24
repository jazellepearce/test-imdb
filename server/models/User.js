const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
let userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		watchlist: [
			{
				type: mongoose.Types.ObjectId,
				ref: 'Movie',
			},
		],
	},
	{
		timestamps: true,
		collection: 'users',
	}
);
userSchema.pre('save', function (next) {
	if (!this.isModified('password')) {
		return next();
	}
	this.password = bcrypt.hashSync(this.password, 10);
	next();
});
userSchema.methods.comparePassword = function (plaintext, callback) {
	return callback(null, bcrypt.compareSync(plaintext, this.password));
};
module.exports = mongoose.model('User', userSchema);
