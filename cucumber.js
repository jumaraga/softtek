module.exports = {
  default: {
    require: ["./test/**/*.ts"],
    format: ["pretty"],
    paths: ["./test/**/*.feature"],
    requireModule: ["ts-node/register"],
    publishQuiet: true
  }
};