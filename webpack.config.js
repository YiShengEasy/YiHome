module.exports = (config)=>{
  const module=config.module.rules;
  module.push({
    test: /\.txt$/,
    use: 'raw-loader'
  });
  return config
}
