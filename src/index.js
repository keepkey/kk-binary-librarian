let request = require('request');
let sha3_256 = require('js-sha3').sha3_256;
let ByteBuffer = require('bytebuffer');

let githubReleaseUrl = 'https://api.github.com/repos/keepkey/keepkey-firmware/releases';

function options(url) {
  return {
    url: url,
    headers: {
      'User-Agent': 'request'
    }
  }
}

function sortByTagNum(a, b) {
  return b.tag_name - a.tag_name;
}

function packageRawAsset(url, padTotal) {
  let rawAsset = {}

  request.get(options(url), (err, _, body) => {
    console.log('response', body);
  });

  return rawAsset;
}

request.get(options(githubReleaseUrl), function(err, _, body) {
  let res = JSON.parse(body);
  let assetData = {};

  res.sort(sortByTagNum).forEach((data) => {
    assetData[data.tag_name] = {};

    data.assets.forEach((asset) => {
      if (asset.name.includes('keepkey_main')) {
        let url = asset.browser_download_url;
        let padTotal = asset.name.includes('bootloader') ? 16 : 256;
        let packagedAsset = packageRawAsset(url, padTotal);
        // console.log('packaged asset', packageRawAsset);
        // assetData[asset.name] = packageRawAsset(url);
      }
    });
  });
});

