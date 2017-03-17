/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["assets/images/badge.png","0745312df58e58a805ad6f18bfb08cbb"],["assets/images/marker-yellow.png","92104c03c5e1d6ff69b5b334c8c046f9"],["assets/images/points-of-interest/01.109.jpg","f8107907ac46a9186d2670b8273ae3ad"],["assets/images/points-of-interest/01.112.jpg","8aa58e16fca0913c4284c8889e1ec328"],["assets/images/points-of-interest/01.115b.jpg","ac26a8fbb5f8ffe5b09b9dedfae266fa"],["assets/images/points-of-interest/01.117b.jpg","b80e8d0bf217cb0cfb13edf62b44b4a8"],["assets/images/points-of-interest/01.129.jpg","c40b9a5d949b20ddfbc5f8ddfe897d4b"],["assets/images/points-of-interest/01.129.png","d6f8697be19b8ba2d8027ba939e5519c"],["assets/images/points-of-interest/01.130.jpg","3a4d37186104647bd7d31079079c4564"],["assets/images/points-of-interest/01.25b.jpg","bde322ffedb67935926b4ea9bc32643c"],["assets/images/points-of-interest/01.25b_26b_combined.jpg","58d9a24dd50aff537c7249fd96621b26"],["assets/images/points-of-interest/01.26b.jpg","73629ae1efc59fa7ae1b2b7abeeab6cf"],["assets/images/points-of-interest/01.38c.jpg","26e0a706e3311612b0b92fe54f1fec88"],["assets/images/points-of-interest/01.77c.jpg","84e6f9c1824c1d4fc693591dea981bc9"],["assets/images/points-of-interest/01.79.jpg","972556e3c070f8150991bdaa057623e6"],["assets/images/points-of-interest/01.79_87_combined.jpg","a9e8f74108ca2d229f11a5db79c6cf09"],["assets/images/points-of-interest/01.87.jpg","14bda493b4dab90077032e2bcd841651"],["assets/images/points-of-interest/02.129b.jpg","a6f504584a45857aceffbe724b419a9b"],["assets/images/points-of-interest/02.134.jpg","c619b0d9b228913e26304dc3792e2d94"],["assets/images/points-of-interest/02.138.jpg","2649dd0a08dca195f17a59eaa7487f3d"],["assets/images/points-of-interest/02.145.jpg","496ca0cae81cbcc635347b3fd2079d96"],["assets/images/points-of-interest/02.152.jpg","7dafc9a39036ba4b5025aa1d74cd829a"],["assets/images/points-of-interest/02.170.jpg","561f5086786377c8974a7d9ca5c5e958"],["assets/images/points-of-interest/02.170_171_combined.jpg","e4868a841077f173f8379b05d4f05dc0"],["assets/images/points-of-interest/02.171.jpg","de703995c46289a59a8d710fa44b1212"],["assets/images/points-of-interest/02.172.jpg","b07119493de8a7e13938690b82416b7d"],["assets/images/points-of-interest/02.180.jpg","11edd04717ff14436f98fb498f9bebef"],["assets/images/points-of-interest/02.252.jpg","84f6a80d0adf5b9a023a94c85586828a"],["assets/images/points-of-interest/02.58c.jpg","a44c7fb7645d2d0503ce28c9e358df8f"],["assets/images/points-of-interest/02.65f.jpg","271f53b6d377d9a388ae8d6f0a12b1ac"],["assets/images/points-of-interest/02.83.jpg","060de5d4ff8e7dcf041de8eca73aada2"],["assets/images/points-of-interest/02.86c(1).jpg","1959d92ff058906ba2ac50a2dcf50335"],["assets/images/points-of-interest/02.86c1.jpg","3e7b1f380bde172a1fafaaa3e281ed4d"],["assets/images/points-of-interest/02.91b.jpg","b93e49f80fa5416a365f4c51cc19967e"],["assets/images/points-of-interest/03.100b.jpg","221dc5dc6bbf62c84d25304a5f9ab779"],["assets/images/points-of-interest/03.100b_168_combined.jpg","bf4f52d9e34b316c6f083f11c4dffad7"],["assets/images/points-of-interest/03.101.jpg","02a08dbcdb48ad3019e1ea40c711585e"],["assets/images/points-of-interest/03.104.jpg","ec5edb61e93190b9d4903848f79cd519"],["assets/images/points-of-interest/03.116.jpg","493d33d38070a9e0edc00c491dc5ce77"],["assets/images/points-of-interest/03.166.jpg","751bfc77f407d51676cbf69aaedd4719"],["assets/images/points-of-interest/03.166_34.20_combined.jpg","eedfb8c1ad615f88240978e0493c217a"],["assets/images/points-of-interest/03.168.jpg","6d0d91d8f26e8dd038de153420e94f30"],["assets/images/points-of-interest/03.24b.jpg","a5a5e39c3b92f276a6163d9961763744"],["assets/images/points-of-interest/03.26h copy.jpg","4f5f6294aa3179d4985cafcaaf8be3d7"],["assets/images/points-of-interest/03.26h.jpg","4f5f6294aa3179d4985cafcaaf8be3d7"],["assets/images/points-of-interest/03.49b.jpg","2903703d83f22fd29470b47adf44f44a"],["assets/images/points-of-interest/03.51b.jpg","26db43faee811c939ad0b3ddf2eb2dd8"],["assets/images/points-of-interest/03.52_53b_combined.jpg","116973dd909b526083884c61f56e5ce1"],["assets/images/points-of-interest/03.52b.jpg","9693ef96a9de4c7465e985ba9400e748"],["assets/images/points-of-interest/03.53b.jpg","02b63c889d53823277df3a0b05814cf9"],["assets/images/points-of-interest/03.91.jpg","5fd6869faf5e8379bb6068250dba6fc0"],["assets/images/points-of-interest/03.99.jpg","422c86a85a98607a470dc84d204373d7"],["assets/images/points-of-interest/04.03b.jpg","8e968270ab1c3bc05b3cd823497955a4"],["assets/images/points-of-interest/04.04.jpg","bf973a8dc24bcffd1a6b51f94560e77a"],["assets/images/points-of-interest/04.05b.jpg","4cdf8969248ece7b87046da2e64fee33"],["assets/images/points-of-interest/04.06.jpg","6d0d3c2860a7139d0439cdec5ef6caf6"],["assets/images/points-of-interest/04.12.jpg","ebc78f3fb7e8f7997562928170bec2d6"],["assets/images/points-of-interest/05.08c.jpg","da5379729ba6aa186e01ca78d6d5b4a2"],["assets/images/points-of-interest/05.10.jpeg","ea03fcf6ce46a873400fdd60cb3a97d3"],["assets/images/points-of-interest/05.10.jpg","b5c4c9924d6c1b751f8114999f94e0bc"],["assets/images/points-of-interest/05.11.jpg","5eddfa7db0468210c88aac8e38ee7836"],["assets/images/points-of-interest/05.14.jpg","7827fc6f819aaa1ab5c175e7a7cf20d0"],["assets/images/points-of-interest/05.19.jpg","8422e7fcc0e83291566cdbce89ef2b4a"],["assets/images/points-of-interest/05.22.jpg","3ca7f19ea2023610c7c063cf7b82a1cd"],["assets/images/points-of-interest/05.24.jpg","7be0468922eac99b6ad836b08267930b"],["assets/images/points-of-interest/06.06.jpg","fe9dce5ec44bb53c79d5b0eef71a7049"],["assets/images/points-of-interest/06.11b.jpg","ac6d5ac44510f6a1f2abe3a28ada0bac"],["assets/images/points-of-interest/06.20b.jpg","805451a6b90e54e72be3ba407480e97e"],["assets/images/points-of-interest/06.21.jpg","f19259fd182a5cbf355e6686507d2e79"],["assets/images/points-of-interest/06.23.jpg","202173c95594558c47ec89a0e38182ba"],["assets/images/points-of-interest/06.25.jpg","006d875ee565577f2557e01f352ef5e7"],["assets/images/points-of-interest/07.03b.jpg","8f906423824993ecb6bd2da20b2dd36d"],["assets/images/points-of-interest/07.07.jpg","a281017ba4987a6f4250f9594877ed95"],["assets/images/points-of-interest/07.12b.jpg","4e2ba3945b53e270a0124640ade81c0a"],["assets/images/points-of-interest/07.22b.jpg","dcc7469f1be5914587ea2dc3f17d06a8"],["assets/images/points-of-interest/07.25.jpg","2d8b51970396abfde008d521e5469f94"],["assets/images/points-of-interest/07.28b.jpg","252a13f0ef4ee874844e71142590c981"],["assets/images/points-of-interest/07.32.jpg","d2707931b3458efe2b27468566738856"],["assets/images/points-of-interest/07.33.jpg","25f2c9c133e2046ac1faa5b0822cf10e"],["assets/images/points-of-interest/08.01.jpg","520154c2193325cec4bb8f5b9369f277"],["assets/images/points-of-interest/08.07b.jpg","6088fc191afc87acaf7fbf6266aa2c9b"],["assets/images/points-of-interest/08.09b.jpg","3af33efbb1b16f49465469335edb80e5"],["assets/images/points-of-interest/08.11.jpg","f6d31c1d6b93d54fa987f96d667708b3"],["assets/images/points-of-interest/08.12b.jpg","e8ca8727b1aa5a672a3ecf5dd1163fbd"],["assets/images/points-of-interest/08.15b.jpg","65cbd6f66a61e9ad1f11e87f71a33642"],["assets/images/points-of-interest/09.01a.jpg","ba34a6c041096c1f027ea3e74d1d016a"],["assets/images/points-of-interest/09.02.jpg","be83773243f1f7f49d01d0cf22e11694"],["assets/images/points-of-interest/09.10a.jpg","d461121e331baac98ebd16ac975d5996"],["assets/images/points-of-interest/09.14.jpg","714c3702e8f41e3b50cec6629f0df6c3"],["assets/images/points-of-interest/09.15.jpg","fa6b2602b89cdd611bcad4e1d1c97a12"],["assets/images/points-of-interest/10.01.jpg","9d74526c8847ba4459742f10db082079"],["assets/images/points-of-interest/10.05.jpg","df3abe7d2eef560b79e07dd6e26babc1"],["assets/images/points-of-interest/10.06.jpg","36cccc7ea5364207a85cc03d0a293862"],["assets/images/points-of-interest/11.05.jpg","8cb3d8962eccbdd117039582544030fe"],["assets/images/points-of-interest/11.10.jpg","5d5fa806eaca04215d937af7a24b0f22"],["assets/images/points-of-interest/11.14.jpg","5d5329390cf76b6a25817f6215a9911a"],["assets/images/points-of-interest/11.15b.jpg","255ade63a2f8b9dabc1f0f084f532f2f"],["assets/images/points-of-interest/11.26.jpg","7694b6b6d318e08afe27e255bbec0649"],["assets/images/points-of-interest/12.02b.jpg","beb3b0c46b35b78ad311f46641077b8b"],["assets/images/points-of-interest/12.14.jpg","16e9431c8c279e07b0974989f85adf7a"],["assets/images/points-of-interest/12.15.jpg","7e49dfdfdb4167cc8a45b7673332e15b"],["assets/images/points-of-interest/12.17.jpg","90ad756a991dc9695a6316a03bbb57c4"],["assets/images/points-of-interest/12.24.jpg","d4c3db58dc8f27adbdee4d22e26ae267"],["assets/images/points-of-interest/12.29.jpg","56539210c4774b18bbbb372553742617"],["assets/images/points-of-interest/12.42.jpg","ce97d617f94cf6b680e335884fb91977"],["assets/images/points-of-interest/12.52.jpg","45e8f0af3e239b816b44d61dce35a84c"],["assets/images/points-of-interest/12.52b.jpg","66f1cc36fc6c9cd938f51aede0b24679"],["assets/images/points-of-interest/12.54.jpg","d1dd4edfd05688837c935c8d1f010cbf"],["assets/images/points-of-interest/12.68.jpg","d57f03da40474defd8badabe15bacf83"],["assets/images/points-of-interest/12.69.jpg","36f1e48fe105557df6c1d737bc44edec"],["assets/images/points-of-interest/12.70.jpg","8d246decab30575b6f6920a4535e5b77"],["assets/images/points-of-interest/12.72.jpg","dc31ec5e0d4d02ebff9acdbfc6321053"],["assets/images/points-of-interest/13.07.jpg","4bdcf92f0172fde976a31b1330d2fbe0"],["assets/images/points-of-interest/13.08.jpg","97c36a8d228c59d90d79660a393cc8c1"],["assets/images/points-of-interest/13.12.jpg","537da2e92dfa35baf62834ed3a699a13"],["assets/images/points-of-interest/13.34.jpg","069ea22352ffb4ffdde949765c7a6ed4"],["assets/images/points-of-interest/13.39b.jpg","494a32b6ed3d1ac9ae1dc65c8284e01e"],["assets/images/points-of-interest/14.11b.jpg","f50ff5aa9bc2de825349c4cfac628c08"],["assets/images/points-of-interest/14.12.jpg","d1233089803d69a067473bc24ac908b5"],["assets/images/points-of-interest/14.12b.jpg","9479a1c06d5e21a827e80ccf4d105013"],["assets/images/points-of-interest/14.19.jpg","11c7161d84bc68729f53261e8d768d2d"],["assets/images/points-of-interest/14.19b.jpg","c38cb9cc4b0b5a0d874ec38ce7a20311"],["assets/images/points-of-interest/15.02.jpg","721c06a153c573dff56ea34b201aa48a"],["assets/images/points-of-interest/15.04.jpeg","f839bae805b58e1b8e7900646c90cd04"],["assets/images/points-of-interest/15.04.jpg","ed33657571f79acf2b74125700ca40a3"],["assets/images/points-of-interest/15.07.jpg","ff1826e0a52612ef431c2c01aab5c350"],["assets/images/points-of-interest/15.11.jpg","8b99d2863f75052f234313429e5dcd74"],["assets/images/points-of-interest/15.14.jpg","01d269c6157fc149371d8d99eb4f8e32"],["assets/images/points-of-interest/15.14b.jpg","afea022aec0ed2cb1d5677f33e2a74b3"],["assets/images/points-of-interest/16.10.jpg","30d4c751afc41cfe0030cb897a365472"],["assets/images/points-of-interest/16.21b.jpg","6bd405701c88a350f8ca77ac520b19d8"],["assets/images/points-of-interest/16.27.jpg","ffcccdd06e3ab4a98158e28278e77909"],["assets/images/points-of-interest/16.28.jpg","71490a594d30d971527ec1c36a59aac6"],["assets/images/points-of-interest/16.37.jpg","b30f8daaf2c9246fa26afd39fff46552"],["assets/images/points-of-interest/16.42.jpg","777b0f90e921083052aea83f4161954a"],["assets/images/points-of-interest/17.06b.jpg","5ad2218b2e25ddcd01ef80511ee5a379"],["assets/images/points-of-interest/17.07c.jpg","f26bb59c6ce2ba30ff453a6430d4a4c6"],["assets/images/points-of-interest/17.11.jpg","542d4433d3ae2255018dfd7738c47a2b"],["assets/images/points-of-interest/17.18b.jpg","0d92917bcd3627dcd80d3b87f090ecda"],["assets/images/points-of-interest/17.19.jpg","1ff3cc1a6535a029793f82c21e10c301"],["assets/images/points-of-interest/17.21.jpg","1b16a28a6512586832370d660ae03df9"],["assets/images/points-of-interest/18.01c.jpg","13aaa396c5b122304767e995479437e3"],["assets/images/points-of-interest/18.10.jpg","591376f4fa2eb0d87df2fa1e71e4534d"],["assets/images/points-of-interest/18.11.jpg","eeda4e360a2fd43ca0179f742b9668f1"],["assets/images/points-of-interest/18.13.jpg","e6f303c0d43ec3a16816c2e116dcf05a"],["assets/images/points-of-interest/18.25.jpg","9b52ea16cac1c5a443b127842c772ab3"],["assets/images/points-of-interest/19.03a1.jpg","0700791ad5e9695467864b1838644003"],["assets/images/points-of-interest/19.12 copy.jpg","2bd73a30ea5648e900830d9ef4a6e768"],["assets/images/points-of-interest/19.12.jpg","2bd73a30ea5648e900830d9ef4a6e768"],["assets/images/points-of-interest/19.16a.jpg","c815b6fe1629cd1032d65cbe04733da7"],["assets/images/points-of-interest/19.29b.jpg","7770a6b7a110a87ecf77e8ce290d48ab"],["assets/images/points-of-interest/19.48.jpg","082ec0f37c19e28c17bd748563891273"],["assets/images/points-of-interest/19.60.jpg","fcc622c9f749e182199aed5e5ebbce1f"],["assets/images/points-of-interest/19.64.jpg","3943e9fcfab981921c3f51be7ff87b93"],["assets/images/points-of-interest/19.65a.jpg","01759b802817ae9cb6166ca2ce2a52dd"],["assets/images/points-of-interest/19.72.jpg","96ab34fbe5800ff7c67cb5ee6a76257f"],["assets/images/points-of-interest/19.73.jpg","81b224e1c91b66bb9e62f33f569a5c34"],["assets/images/points-of-interest/19.75b.jpg","540aa9e99d63641bc98e35a72f32efdd"],["assets/images/points-of-interest/19.78.jpg","4aa40e9b23d8fd455dedb359576d55f2"],["assets/images/points-of-interest/19.82.jpg","a64a492647b3bb519ecec649e9d86f03"],["assets/images/points-of-interest/19.83.jpg","ad7ab9ca0cd410f75976911bb81fc96d"],["assets/images/points-of-interest/19.85.jpg","90c6174f623f1e316eb090effef0c90e"],["assets/images/points-of-interest/19.94.jpg","0ac8317f485fc89d5131e4496f161042"],["assets/images/points-of-interest/20.04a.jpg","a51cddb41ffb9bee7e647f790c63cad0"],["assets/images/points-of-interest/20.06b.jpg","7c6bc8b561175b20363c36e8377c5979"],["assets/images/points-of-interest/20.11.jpg","2ba11576716cfdc45919d042095c7d69"],["assets/images/points-of-interest/20.12.jpg","ee4488fbb90738482997a4dc2b13eb26"],["assets/images/points-of-interest/20.16.jpg","33bca7044fde6977c802b73addd107f2"],["assets/images/points-of-interest/20.17.jpg","6979e359b907b8a010b499dff75b4480"],["assets/images/points-of-interest/20.19.jpg","558e7f3219ff998778cdc34a13dd1ad4"],["assets/images/points-of-interest/21.02.jpg","4173ab2715c0e3391b1d78a192c92a69"],["assets/images/points-of-interest/21.03.jpg","4fe796fd7ffa35d9f536a3e689e3050f"],["assets/images/points-of-interest/21.09b.jpg","354866f5ecbe440f8ffc4c93f6fa9e72"],["assets/images/points-of-interest/21.19.jpg","fca91f3a7de35bffbfa61c01aca3607b"],["assets/images/points-of-interest/21.21.jpg","86a6e9f63b35e3c1c38b7191ec481e0c"],["assets/images/points-of-interest/21.37a.jpg","0344a01217cc98ad60067c03f360e5d0"],["assets/images/points-of-interest/21.45.jpg","397169879934e9f6c29112b0ec191f75"],["assets/images/points-of-interest/21.75.jpg","233b94fa8cd750377fffcb472499367b"],["assets/images/points-of-interest/22.10.jpg","cda0d795d91f5ddb16e8f317479bc90a"],["assets/images/points-of-interest/22.12.jpg","a86e2663aedb70fcfaf6455a7cc8cce6"],["assets/images/points-of-interest/22.13.jpg","dc7f08f80ff42759e1b4591181ce1f6a"],["assets/images/points-of-interest/22.17a.jpg","6472020ce7f24e60e0b30e591c21e426"],["assets/images/points-of-interest/22.20.jpg","b5cdc44697694f8294ec2060ccd7c5fa"],["assets/images/points-of-interest/23.05b.jpg","e2e8a4a5f8252ed80646f78f8cf05c01"],["assets/images/points-of-interest/23.06.jpg","4d1988c5502efc0d52124b9784c43407"],["assets/images/points-of-interest/23.18a.jpg","715325e26aaea482f7234d9f51a5693d"],["assets/images/points-of-interest/23.25.jpg","23e8f63b783016dce716459a2045d1fa"],["assets/images/points-of-interest/23.27.jpg","2ae7b14c950481f359a70764640ed5fb"],["assets/images/points-of-interest/23.34c.jpg","9f4d531f541b4bfcb2e08e1c98f73545"],["assets/images/points-of-interest/23.54.jpg","bf4134c8ef15936006efd0b4cf5605fd"],["assets/images/points-of-interest/23.63.jpg","a780d69c4f59bbcf813f402099bc31ef"],["assets/images/points-of-interest/24.05.jpg","b6b8e4cf3dd7bd9048ec438c458342d3"],["assets/images/points-of-interest/24.10a.jpg","b8c36bde4a429fe4d5b853e9f536c845"],["assets/images/points-of-interest/24.11b.jpg","f16fe655b32d15c42b6f9d0c9c87f6fd"],["assets/images/points-of-interest/24.12b .jpg","49299f7c62a6b6bb922a203e8dd307c8"],["assets/images/points-of-interest/24.12b.jpg","3a4a11c792d5d693b9a461aa71d47e1c"],["assets/images/points-of-interest/24.16.jpg","ba123250667cc9144870a276f0e3e76d"],["assets/images/points-of-interest/24.17b .jpg","62f94f29fdef7198fe6f40f21e0c3d78"],["assets/images/points-of-interest/24.17b.jpg","97b22632af7dc5fd00c24e45e058b261"],["assets/images/points-of-interest/24.22.jpg","ead8e18d3be615d624ba6fc4de387418"],["assets/images/points-of-interest/24.27.jpg","f9dce3b3c3d0f79ce2c0ab65c3ca9ba1"],["assets/images/points-of-interest/25.04b.jpg","5d4ad59f98b10275b64706b4a6911d11"],["assets/images/points-of-interest/25.07.jpg","52c93315a1c4e2cb5b8e54a8a13e689f"],["assets/images/points-of-interest/25.10.jpg","762690c3ad7fae1170cb6d8bf0558477"],["assets/images/points-of-interest/25.19.jpg","69c242a15cb702d3add33c9d4869268b"],["assets/images/points-of-interest/25.22.jpg","61aebb35476ccd0612c8d218c308fde4"],["assets/images/points-of-interest/25.23.jpg","4aec68d4c99d07bab1a029011a054c97"],["assets/images/points-of-interest/25.25.jpg","75b073b0bf27629f414df6f21b3310c7"],["assets/images/points-of-interest/26.01d.jpg","4e2ce01cb1147b60009ac61d8207c1cd"],["assets/images/points-of-interest/26.02.jpg","e755163d5f918a9a225bcb0e54bb6876"],["assets/images/points-of-interest/26.04.jpg","3bcc37dec9e93a47e0ca0cd3526bebd9"],["assets/images/points-of-interest/26.09.jpg","ce1aba38d12d88efa34a7472e05bbc7e"],["assets/images/points-of-interest/27.13.jpg","a5f9d84dc129a1c289a8c60cf84eee47"],["assets/images/points-of-interest/27.20.jpg","eec3998b0673b41ab66e54e50832a09e"],["assets/images/points-of-interest/27.21.jpg","3fd5476d4f8ef6e9dacdca6bcb784231"],["assets/images/points-of-interest/27.27.jpg","0c1de46c377fb0a3e4c32f83d0c0cc85"],["assets/images/points-of-interest/27.29.jpg","9fe6774dd907692258c685265e668dc1"],["assets/images/points-of-interest/27.31.jpg","0e6aa99a022e0ddf7fcefea1ee75dae4"],["assets/images/points-of-interest/27.32.jpg","0b085e64171b1ef7b6af6c0639e8bc7c"],["assets/images/points-of-interest/27.35.jpg","47f9f5eaaf979bd34db2acefe497d72a"],["assets/images/points-of-interest/28.13.jpg","ec68f948d0c462d8b3a937b88a405cda"],["assets/images/points-of-interest/28.25b.jpg","3a8cca2cb0f827d2916e0bf798f992b0"],["assets/images/points-of-interest/28.79.jpg","f1594fd264f5d697071269e2c0a28a6d"],["assets/images/points-of-interest/28.80.jpg","a7189da595b338564844725135a4d03f"],["assets/images/points-of-interest/28.82b.jpg","ac62dc4b914991bfe7f2f9a5a0025f48"],["assets/images/points-of-interest/28.83b.jpg","02f661d153894744b967a0a1c99d699a"],["assets/images/points-of-interest/28.85.jpg","091529828aedb8bfd066e16b7b14d7c5"],["assets/images/points-of-interest/29.11.jpg","84f8b9e0672ecb07bd018b93acc18ef7"],["assets/images/points-of-interest/29.19.jpg","e36f4cb6e4e19e4fa5124ad75480dacc"],["assets/images/points-of-interest/29.22.jpg","65a9facd4d74c24754fed95be11db097"],["assets/images/points-of-interest/29.23.jpg","2ffa6de09a138f8c7bf9fde5a3f4bb8b"],["assets/images/points-of-interest/30.02b.jpg","94fbdf5ee54c59896c350fa91b41f424"],["assets/images/points-of-interest/30.03c.jpg","6fe867f1bf03a866bbb95ddb8abd2f81"],["assets/images/points-of-interest/30.04a.jpg","bae70cfcfdb5c02fc89106dbd5e5bee8"],["assets/images/points-of-interest/30.07b .jpg","c49a20d4b4f87ba246ef1e90bc765ba9"],["assets/images/points-of-interest/30.07b.jpg","f63547f95c1e99fc4a025048020d6cc9"],["assets/images/points-of-interest/30.09.jpg","2d54fafde85eb614850655b1133f2877"],["assets/images/points-of-interest/30.10.jpg","899431243e2db289defeaa953aef2921"],["assets/images/points-of-interest/30.12.jpg","c2c9aad272559a8812f1deab2d70af0f"],["assets/images/points-of-interest/30.13.jpg","fee8f7513d42d4bfcb834d29ace30c45"],["assets/images/points-of-interest/30.16.jpg","f39bfc5446626d46172c0d59cdadafc3"],["assets/images/points-of-interest/30.23.jpg","65f916ab20ce3083c3154731e4293aac"],["assets/images/points-of-interest/30.24.jpg","f1cc392860d319585611a78e9c53a10e"],["assets/images/points-of-interest/30.37.jpg","d46a477016436b9591a93a3638f26f55"],["assets/images/points-of-interest/30.37_39_combined.jpg","b55bf16ea106d78e371a83fd430b5502"],["assets/images/points-of-interest/30.39.jpg","aea3f00136d69cf5af3b5869984cf32e"],["assets/images/points-of-interest/31.13.jpg","1ee0e6af8fdda86beaef77cd7733d620"],["assets/images/points-of-interest/31.86.jpg","68cf0b5e89defc008345c345ee29f1b6"],["assets/images/points-of-interest/31.87.jpg","e4109f97220c75fd04322353ce33518b"],["assets/images/points-of-interest/31.88.jpg","5e20a811a2dcb5d215548ce8525100f6"],["assets/images/points-of-interest/32.05.jpg","0b27919880db7eacdd831b2cb022089b"],["assets/images/points-of-interest/32.08.jpg","62c7bfb1806e58b234d3605eb1105f03"],["assets/images/points-of-interest/32.10b.jpg","1e303db330e0335feb1b91775b575ce1"],["assets/images/points-of-interest/32.19.jpg","9276d34effa4f94859487922452eb468"],["assets/images/points-of-interest/32.20.jpg","a0bce31eb4b2943f2e81f0bed4ebb535"],["assets/images/points-of-interest/32.21.jpg","90d422ac1067fa925ee2192e01a80585"],["assets/images/points-of-interest/32.21b.jpg","36e5595317195269cae47125c8b5855c"],["assets/images/points-of-interest/33.02.jpg","4bef3d421be47da3d8b23eac7b5feaa7"],["assets/images/points-of-interest/33.36b.jpg","f70daad2c418be31ce5418a3fdb0359a"],["assets/images/points-of-interest/33.52.jpg","84e1586eb7f706b68fc17af12b976af6"],["assets/images/points-of-interest/33.53.jpg","e230b600d0ce4e6d974f853565fd74b5"],["assets/images/points-of-interest/33.54.jpg","b775034ff1a7fd9f4903f81ce3ee0e00"],["assets/images/points-of-interest/33.57.jpg","1f44065d9b15abe19242ea5b67994abd"],["assets/images/points-of-interest/34.101.jpg","cba46a4c13f9a6ad7a6e25a532d6a371"],["assets/images/points-of-interest/34.20.jpg","88d2c3129fe00dfc7ece3649fece2086"],["assets/images/points-of-interest/34.32b.jpg","66f056c0f517002ee666b31093cf4d0c"],["assets/images/points-of-interest/34.32c.jpg","807d2051293ad2861f8d25ee496b0c99"],["assets/images/points-of-interest/34.34a.jpg","6d1e67274b16a5fa9cf8c6ea23e76dd0"],["assets/images/points-of-interest/34.34b.jpg","85997a7acb5e56c09d672923448efe3a"],["assets/images/points-of-interest/34.34c.jpg","cd9446756c5e81331e95cbaeff679e8f"],["assets/images/points-of-interest/34.38.jpg","fc7925db64d9cabc1f5c7cdfb1ad14b5"],["assets/images/points-of-interest/34.41a.jpg","74483cc0fc07c0664f5ddd6eb75fcc37"],["assets/images/points-of-interest/34.43.jpg","d581f27a94d7a4978aed422bdd421aac"],["assets/images/points-of-interest/34.43b.jpg","3220ac381ddae6261ae30a652a361e5b"],["assets/images/points-of-interest/34.52b.jpg","7e058d5847aedcfab82eea912fc53481"],["assets/images/points-of-interest/34.53.jpg","c379784ef7447f93ad03a6d69b040598"],["assets/images/points-of-interest/34.58.jpg","7499b69ee76a4e42313902b03260862e"],["assets/images/points-of-interest/34.64.jpg","29736622a007b2ae3c1867ffd19ff246"],["assets/images/points-of-interest/34.71.jpg","788522a07d3b0d6b6c3ea170e053f69f"],["assets/images/points-of-interest/34.71.png","cf86f9d87499555e130a9d46feca8a28"],["assets/images/points-of-interest/34.72.jpg","b56db0ed010806666d3769a513b7906b"],["assets/images/points-of-interest/34.72b.jpg","3a5a2283e7d374b6c488500004ad272e"],["assets/images/points-of-interest/34.74.jpg","272f6b92b8a89d0c6a96db55198520e9"],["assets/images/points-of-interest/34.74b.jpg","03fdae988a48d3f724c3f3dceacd14ca"],["assets/images/points-of-interest/34.75.jpg","ab9d8d055e2d35743c62ff372bb3bfa4"],["assets/images/points-of-interest/34.76.jpg","569e4b9a839b9557f81dbbe7e97cf678"],["assets/images/points-of-interest/34.77.jpg","d8959d1ac44101f6db8d59256c76ccbf"],["assets/images/points-of-interest/34.78.jpg","34f26f03f37b08156bb5a9034eef8243"],["assets/images/points-of-interest/34.79.jpg","993832bc373d6549c343e8b0e25a497b"],["assets/images/points-of-interest/34.80.jpg","1a7e5af8a42006697a7723dd50857ef8"],["assets/images/points-of-interest/34.81.jpg","84c03b27fdd2cc116c218acf65916d63"],["assets/images/points-of-interest/35.02.jpg","9b4bacd8a65f8992ea46ec2cd1729dbd"],["assets/images/points-of-interest/35.03.jpg","0f172816f665bfbc1699af987ce7c59f"],["assets/images/points-of-interest/35.05.jpg","b751df13cc7e4653f8083051a50ef23d"],["assets/images/points-of-interest/35.18","8b062a78426328ba2635bf8b6c500171"],["assets/images/points-of-interest/35.20","a8c0a5c2f00b619ef69326242084e01b"],["assets/images/points-of-interest/35.22.jpg","48154faa66f04cebfae3bf4b444f5030"],["assets/images/points-of-interest/35.23.jpg","a959c2f4a638131fdb3d6f34735a095f"],["assets/images/points-of-interest/35.24b.jpg","c99b6291ae4422f3fcb5e695b2f0629e"],["assets/images/points-of-interest/35.27.jpg","b4baaba305412ea675a31728f930438b"],["assets/images/points-of-interest/36.11.jpg","5bdf076a6ac95ded7a78aad86a12f8df"],["assets/images/points-of-interest/36.12.jpg","502955ce1652d98ffd37dbbbb6bbccca"],["assets/images/points-of-interest/36.14b.jpg","75b8b5c513f7e0dbb60a33e616828072"],["assets/images/points-of-interest/36.16.jpg","9733f7b22e695548cd5c4461c53aa535"],["assets/images/points-of-interest/36.24.jpg","c1195a7c145bb86073d01cab1efa6d1f"],["assets/images/points-of-interest/36.32b.jpg","32d8ad463444356917ab750744e21614"],["assets/images/points-of-interest/36.34.jpg","15507121ab96abae71928b18aeef0c14"],["assets/images/points-of-interest/36.34_35_36_37_combined.jpg","ec6b8c7b874c0faf3627c480c35d005e"],["assets/images/points-of-interest/36.35.jpg","22751aa8cc81f6e32fe6f94d7e5738ef"],["assets/images/points-of-interest/36.36.jpg","2ac2a4a1601dfce496cfae00e8dbd534"],["assets/images/points-of-interest/36.37.jpg","bb729eda797f98b992e16cc330d89e3b"],["assets/images/points-of-interest/36.40.jpg","73c8e2e111834a127a81f617f69514a1"],["assets/images/points-of-interest/36.42a.jpg","67dec17c3fe02e08858abae00370b692"],["assets/images/points-of-interest/36.50c.jpg","67c251a0909da469e9700d4906d82a39"],["assets/images/points-of-interest/36.55.jpg","35dd1d68909e76bfd0d1dbedf7fd4e10"],["assets/images/points-of-interest/36.66.jpg","fd37a448964d91eafd5a399a654599b0"],["assets/images/points-of-interest/37.11.jpg","54514db6a1179d815e02a23aee3e4569"],["assets/images/points-of-interest/37.13.jpg","b3ecb0c4fb85a09b26f7eb9f8b684445"],["assets/images/points-of-interest/37.17.jpg","baf206c71d32862938f259f0183cb685"],["assets/images/points-of-interest/37.18.jpg","5ce4a6a62c1386577d7726f76007a977"],["assets/images/points-of-interest/37.22.jpg","1c23491277d845c52b3d6101509c99a8"],["assets/images/points-of-interest/38.04.jpg","2dde8f36ab1a7389f6f31ebd65fcdffa"],["assets/images/points-of-interest/38.04b.jpg","d97c52ecef16955c9275c2994c8202f3"],["assets/images/points-of-interest/38.10.jpg","0b7eaaef434ec09739eb4721ae368550"],["assets/images/points-of-interest/38.15b.jpg","bb389159cd8ec7bbf4e89466456b10c1"],["assets/images/points-of-interest/38.16b.jpg","8738912712da5028199efc4e989fca5b"],["assets/images/points-of-interest/38.22.jpg","02efca1ed8029655b0b5eaf3ecf9f105"],["assets/images/points-of-interest/38.23.jpg","3398cb93a408f166057ba59010f89332"],["assets/images/points-of-interest/38.29.jpg","5018b0d1071d25e665ef2e5309752724"],["assets/images/points-of-interest/39.03.jpg","61af1adb1e878696c1a61da26f415652"],["assets/images/points-of-interest/39.07b.jpg","7249d18cb8b4fe18a88a5d2b19449461"],["assets/images/points-of-interest/39.11c.jpg","075e3fcb6c0271bf32917e6d1c98d135"],["assets/images/points-of-interest/39.12.jpg","54a27187f42a69be7cc38567ab27c84d"],["assets/images/points-of-interest/40.06.jpg","72feef6786a723d50e1b0ccd7e2dd7c3"],["assets/images/points-of-interest/40.11.jpg","90a2211e42926be20c1a28a9859c67a2"],["assets/images/points-of-interest/40.16.jpg","c5c5aead2c84f478a58eef7d48f3086c"],["assets/images/points-of-interest/40.21.jpg","675ba76fff68ad1b6c8b40f618c58fe1"],["assets/images/points-of-interest/40.51.jpg","564997d1b2b66be1e956f5bfd966b611"],["assets/images/points-of-interest/40.52.jpg","87174c5b8c111989e1ac0651030ebd42"],["assets/images/points-of-interest/40.53.jpg","0d7dcfab3c03bfdd58050fc7a06e6a86"],["assets/images/points-of-interest/41.22.jpg","caaa71fabe95e48ff9a95908ed595301"],["badge.0745312df58e58a805ad.png","0745312df58e58a805ad6f18bfb08cbb"],["favicon.ico","b9aa7c338693424aae99599bec875b5f"],["index.html","653c85725d1915fc1659cb87b977bf78"],["inline.a327cfd10a7abfae7251.bundle.js","46fc82165a2b753a862041f4060f9594"],["main.1eab901ab7d072f92eec.bundle.js","6c1482c653aadbfe180e4af49e0781cd"],["polyfills.b445e9fc396ea1784811.bundle.js","fefcab3c421be094aad31d8f44c882b8"],["styles.bab3a49f4d8498e78a93.bundle.css","bab3a49f4d8498e78a93263a3e61aeb5"],["vendor.752971dff85b452c2021.bundle.js","a7cc1b35c263597fe4d8072f397df61c"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







