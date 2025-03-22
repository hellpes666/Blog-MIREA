import mongoose from "mongoose";

const CounterSchema = new mongoose.Schema({
	_id: String,
	seq: Number,
});

CounterSchema.methods.increment = async function () {
	this.seq += 1;
	return this.save();
};

export const Counter = mongoose.model("Counter", CounterSchema);
