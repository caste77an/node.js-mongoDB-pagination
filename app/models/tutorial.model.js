// column data modified 20210805
module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      user: String,
      email: String,
      name: String,
      college: String,
      class: String,
      gender: String,
      status: Boolean,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.plugin(mongoosePaginate);

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
