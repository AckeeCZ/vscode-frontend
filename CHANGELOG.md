# Changelog

<a name="1.1.0"></a>

## 1.1.0 (2022-11-18)

### Added

- ➕ Deprecate changelog-it in favor of gitmoji-changelog [[97ce7ec](https://github.com/AckeeCZ/vscode-frontend/commit/97ce7ec55a276262ecfb91d80d10d5c03387ba56)]
- ✅ Add tests for typescriptComponent template [[9265d14](https://github.com/AckeeCZ/vscode-frontend/commit/9265d1461182d17af56ee1059d2c7a1028e5e8f0)]
- ✨ Add useAckeeFelaPackage config option [[111f475](https://github.com/AckeeCZ/vscode-frontend/commit/111f47541ac16360257e6fc934546aab3d60993e)]

### Changed

- ⬆️ Run global yarn upgrade to fix vulnerabilities [[bff5f25](https://github.com/AckeeCZ/vscode-frontend/commit/bff5f25e509ef1a9cae8f38b3197e2b5b068089f)]

<a name="1.0.0"></a>

## 1.0.0 (2021-11-30)

### Added

- ✨ Implement includeReactImport option [[0bc7557](https://github.com/AckeeCZ/vscode-frontend/commit/0bc75578da481d4d58a7428286534a1a4dd34fe8)]
- ✨ Implement typescriptFelaExtendProp option [[c5d32c6](https://github.com/AckeeCZ/vscode-frontend/commit/c5d32c6bfac9709174576a06c486d72d6e996fec)]
- ✨ Implement typescriptFelaTheme option [[78631be](https://github.com/AckeeCZ/vscode-frontend/commit/78631beabd1322d538c958c95fcdcccb84d25bfa)]
- ➕ Migrate to yarn [[3944c20](https://github.com/AckeeCZ/vscode-frontend/commit/3944c206c11a6d27409dff9744655f7e5e3537f8)]

### Changed

- ♻️ Pass whole config object to components utils instead of just single props [[38f2238](https://github.com/AckeeCZ/vscode-frontend/commit/38f2238088d1cb6551f6bd8fb3a9a2e2949acaa6)]
- ♻️ Remove React as dependency in template components [[5a59b2d](https://github.com/AckeeCZ/vscode-frontend/commit/5a59b2d0f15309e8e6a4af7b0ec4967c23dbb0e7)]
- ♻️ Migrate github workflow to yarn [[234df51](https://github.com/AckeeCZ/vscode-frontend/commit/234df51ebae118d543f343a0849b8fe20b2c04da)]
- 🚨 Fix TS lint errors [[2b7f397](https://github.com/AckeeCZ/vscode-frontend/commit/2b7f39768a2127feb9c7db830e906f5a30fb8aa1)]
- ♻️ Upgrade dependencies, use parcel for bundling [[ebc511f](https://github.com/AckeeCZ/vscode-frontend/commit/ebc511ffc8dbfc2632cab7ae703f69a472ed18bc)]
- ♻️ Use only named exports (no default ones) [[2cd4ae7](https://github.com/AckeeCZ/vscode-frontend/commit/2cd4ae7e7a782dc86cc4e50478435d64a445b09b)]
- ♻️ Use named exports instead of default export in TS components [[669d865](https://github.com/AckeeCZ/vscode-frontend/commit/669d865769136fe091b9643122f93b1d8032a5fb)]
- ♻️ Get rid of FC type [[6ce72cf](https://github.com/AckeeCZ/vscode-frontend/commit/6ce72cfa4b18e5778c599f6a0883e56ce5c96a9d)]

### Miscellaneous

- Bump path-parse from 1.0.6 to 1.0.7 [[84171fd](https://github.com/AckeeCZ/vscode-frontend/commit/84171fd3cc5501c85fa94d4a0523e111f383b2a3)]

<a name="0.4.8"></a>

## 0.4.8 (2021-08-06)

### Changed

- 🚚 Move workflow file [[e371f1d](https://github.com/AckeeCZ/vscode-frontend/commit/e371f1d182c618db62b4d1b18b2fe37a88aab013)]

### Removed

- 🔥 Remove Travis config [[fa33cf4](https://github.com/AckeeCZ/vscode-frontend/commit/fa33cf48261dbcf190f865a531c3779347df6038)]

### Miscellaneous

- 👷 Update workflow to run only on tags [[bbdf028](https://github.com/AckeeCZ/vscode-frontend/commit/bbdf0286238233d73d7ecd54903c86226413bce4)]
- 👷 Add create release step [[d6b6e29](https://github.com/AckeeCZ/vscode-frontend/commit/d6b6e2994dff5a7096e63ad410fb755a55fdcd2d)]
- 👷 Update publish secret [[e6e801f](https://github.com/AckeeCZ/vscode-frontend/commit/e6e801f7adce205ef2f81eb30bdff89edc829dc9)]
- 👷 Setup Github Actions deploy [[a4c6d42](https://github.com/AckeeCZ/vscode-frontend/commit/a4c6d425cc89711851ac426f9fa9ace7d797f1ce)]

<a name="0.4.7"></a>

## 0.4.7 (2021-07-20)

### Added

- ✨ Use \*.rules.js naming [[d6cbc30](https://github.com/AckeeCZ/vscode-frontend/commit/d6cbc30edf7202ed0dc4d66d6193d8f15f8c982d)]

### Fixed

- 🐛 Rename function component type [[efb7487](https://github.com/AckeeCZ/vscode-frontend/commit/efb7487652ad707f98a11286530e18c957e9e00d)]

<a name="0.4.6"></a>

## 0.4.6 (2021-03-18)

### Removed

- 🔥 Remove import of FelaWithStyles in hook component template [[3070bb0](https://github.com/AckeeCZ/vscode-frontend/commit/3070bb07d1292b3561c45df1828080f7d63f8f0f)]

### Miscellaneous

- 🏷️ Use shotened name FC for typing component [[a9501c0](https://github.com/AckeeCZ/vscode-frontend/commit/a9501c02220ba5c680b54f70a180c6ce95e6cf24)]

<a name="0.4.5"></a>

## 0.4.5 (2021-02-08)

### Removed

- 🔥 Remove useless type definition in felaHookComponent template [[cff0114](https://github.com/AckeeCZ/vscode-frontend/commit/cff0114d3bb69eb6b6d9b489f27160e74ab975b7)]

### Fixed

- ✏️ Fix typo in typescript templates file name [[9ccb6fc](https://github.com/AckeeCZ/vscode-frontend/commit/9ccb6fc47f3b797f3bc115d1f2374d02dd191cef)]
- 🐛 Fix generating fela index file with dependencies turned off [[258826f](https://github.com/AckeeCZ/vscode-frontend/commit/258826f6cb7a45f390846d886c1477199959447c)]

<a name="0.4.4"></a>

## 0.4.4 (2021-02-05)

### Fixed

- 🐛 Fix typescript templates [[82cf5a7](https://github.com/AckeeCZ/vscode-frontend/commit/82cf5a7231bdcb9daa81fa0d0af94220338303b3)]

<a name="0.4.3"></a>

## 0.4.3 (2021-02-05)

<a name="0.4.2"></a>

## 0.4.2 (2021-02-05)

<a name="0.4.1"></a>

## 0.4.1 (2021-02-05)

### Security

- 🔒 Manualy fix audit vulnerabilities [[c15d59f](https://github.com/AckeeCZ/vscode-frontend/commit/c15d59fb5c488fd41d6f6e33893bc08d2ab9ec44)]

### Miscellaneous

- 📝 Fix changelog formatting [[b48b691](https://github.com/AckeeCZ/vscode-frontend/commit/b48b691c1cfec72f47593b2ee5e88ea20be0c1c2)]

<a name="0.4.0"></a>

## 0.4.0 (2021-02-05)

### Added

- ✨ Add typescript templates [[2ab9bfa](https://github.com/AckeeCZ/vscode-frontend/commit/2ab9bfa54565e01069ee73ecd25200c667b487e2)]
- ✨ Add fela hook component [[4b86065](https://github.com/AckeeCZ/vscode-frontend/commit/4b860656d2b017f580fa661fa26adb79469562eb)]
- ✨ Add module dependencies configuration to model [[a36afdf](https://github.com/AckeeCZ/vscode-frontend/commit/a36afdfd7c74937192861ea7f8b0cd79f2779b86)]
- ✨ Add extension settings [[ccfadf0](https://github.com/AckeeCZ/vscode-frontend/commit/ccfadf0bb449deb64eab41cdc0d16a687f8e0ce1)]

### Changed

- 🚨 Fix model formatting [[edf2a75](https://github.com/AckeeCZ/vscode-frontend/commit/edf2a75a3e395e1ef97e8a4959b863cbd02be08b)]
- ♻️ Refactor props types in TS templates [[82cea4a](https://github.com/AckeeCZ/vscode-frontend/commit/82cea4a4482015ba1f9b5aaed198b3459e42872c)]
- 🔧 Add prettier config [[7e5ea6e](https://github.com/AckeeCZ/vscode-frontend/commit/7e5ea6e3234cb32ebcfb5e384981b5d8834b8110)]

### Fixed

- 🐛 Add missing hook into JS template [[22a8395](https://github.com/AckeeCZ/vscode-frontend/commit/22a839561c47e0666b7bfd1e405989f63b74055d)]

### Security

- 🔒 Resolve audit vulnerabilities [[88c0251](https://github.com/AckeeCZ/vscode-frontend/commit/88c02510c21115a3259fcb80b5d401d79ee7c0c4)]

### Miscellaneous

- 📝 Update documentation [[7050e0b](https://github.com/AckeeCZ/vscode-frontend/commit/7050e0bb4622b88e8c1066a37b95a1fb7cd5dd32)]

<a name="0.3.0"></a>

## 0.3.0 (2019-08-22)

### Added

- Create component command

### Changed

- renamed current Create component command to "Create Fela component" and moved `connectFela` to `indes.js`

<a name="0.2.7"></a>

## 0.2.7 (2019-07-30)

### Fixed

- fix template fela style name [[11f925e](https://github.com/AckeeCZ/vscode-frontend/commit/11f925eb0e54b939859ea7fe30a2b37b3a5a05f4)]

<a name="0.2.6"></a>

## 0.2.6 (2019-07-29)

### Removed

- remove keyboard shortcut [[0418523](https://github.com/AckeeCZ/vscode-frontend/commit/04185232965b001c831f209a23453c9c8cf570bd)]

### Fixed

- fix template typo [[4541a07](https://github.com/AckeeCZ/vscode-frontend/commit/4541a078ade9944711cacaa582ed45c92635b479)]

<a name="0.2.5"></a>

## 0.2.5 (2019-07-29)

<a name="0.2.4"></a>

## 0.2.4 (2019-07-29)

<a name="0.2.3"></a>

## 0.2.3 (2019-07-29)

### Miscellaneous

- changed logo [[5cac6a3](https://github.com/AckeeCZ/vscode-frontend/commit/5cac6a33fd6140092bb4f21a154813da6eafe94d)]

<a name="0.2.2"></a>

## 0.2.2 (2019-07-29)

### Miscellaneous

- update travis config [[03e10a6](https://github.com/AckeeCZ/vscode-frontend/commit/03e10a6a866857e3593eb3e4853075a5da5aed76)]

<a name="0.2.1"></a>

## 0.2.1 (2019-07-29)

<a name="0.2.0"></a>

## 0.2.0 (2019-07-29)

### Miscellaneous

- create component command

<a name="0.1.2"></a>

## 0.1.2 (2019-07-25)

### Miscellaneous

- Snippets for Fela

<a name="0.1.1"></a>

## 0.1.1 (2019-07-25)

<a name="0.1.0"></a>

## 0.1.0 (2019-07-22)
