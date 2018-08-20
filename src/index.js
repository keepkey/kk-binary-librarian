let request = require('request');
let { sha3_256 } = require('js-sha3');
let ByteBuffer = require('bytebuffer');

let githubReleaseUrl = 'https://api.github.com/repos/keepkey/keepkey-firmware/releases';

function options(url) {
  return {
    url: url,
    encoding: null,
    headers: {
      'User-Agent': 'request',
    }
  };
}

function getFlashAssets() {
  let assetData = {};

  request.get(options(githubReleaseUrl), function(err, _, body) {
    let res = JSON.parse(body);

    res.sort(sortByTagNum).forEach((data) => {
      data.assets.forEach((asset) => {
        if (asset.name.includes('.bin')) {
          let url = asset.browser_download_url;
          let padTotal = asset.name.includes('bootstrap') ? 16 : 256;
          // assetData[data.tag_name] = packageRawAsset(url, data.tag_name, asset.name, padTotal);
          let rawdata = packageRawAsset(url, data.tag_name, asset.name, padTotal);
        }
      });
    });
  });
  // return assetData;
}

function sortByTagNum(a, b) {
  return b.tag_name - a.tag_name;
}

function packageRawAsset(url, tagName, name, padTotal) {
  let rawAsset = {};

  request.get(options(url), (err, _, body) => {
    let rawData;
    let sectorSize = 1024*padTotal;
    let size = Math.max(0, (sectorSize - body.length));
    let data = ByteBuffer.wrap(body);
    console.log('remaining', size);
    // console.log(url)
    console.log(tagName)
    console.log(name)
    if (body.length <= sectorSize) {
      rawData = ByteBuffer.allocate(sectorSize);
      rawData.fill(0xff);
      rawData.reset();
      data.prependTo(rawData, body.length)
      console.log('raw buffer length', rawData)
      console.log('data buffer length', data)
    } else {
      rawData = ByteBuffer.wrap(body)
    }
    // let rawData = ByteBuffer.wrap(body)
    let hash = sha3_256(rawData.toArrayBuffer());
    // let base64 = rawData.toBase64();
    // rawAsset.b64_asset = base64
    // rawAsset.hash = hash
    console.log('hash', hash);
    // console.log('b64', base64.slice(0, 100));
    console.log('=========================');
  });
  // console.log(rawAsset)

  return rawAsset;
}


getFlashAssets();
