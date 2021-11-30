# Change Log

All notable changes to the "ackee-frontend" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## 1.0.0 - 2021-11-30

### Changed

- Replace default exports with named exports only.

### Added

- `typescriptFelaExtendProp` option – should it include `extend` prop in props inteface for given component?
- `typescriptFelaTheme` option
  - for the `extend` prop: should it use `RulesExtend` type (avail. on most of our projects) or fallback to general type: `Partial<Record<keyof typeof felaRules, TRule>>;`?
  - for any fela rule: should it use `TRuleWithTheme` or `TRule` type?
- [breaking 💥] `includeReactImport` option – if enable, `React` is imported. It's false by default.

### Removed

- `FC` React type, use props interface directly.

## 0.4.6 - 2021-03-18

### Removed

- Remove useless type definition in `felaHookComponent` template

## 0.4.5 - 2021-02-08

### Fixed

- Fix generating fela index file with dependencies turned off

## 0.4.4 - 2021-02-05

### Fixed

- Fixed typescript template

## 0.4.3 - 2021-02-05

## 0.4.0 - 2021-02-05

### Added

- S ettings for scaffolding commands:
- module dependencies (whether to load from dependencies.js file or not)
- fela hook instead of connect HOC
- typescript version of all templates

### Fixed

- Audit vulnerabilities

## 0.3.0 - 2019-08-22

### Added

- Create component command

### Changed

- renamed current Create component command to "Create Fela component" and moved `connectFela` to `indes.js`

## 0.2.7 - 2019-07-30

### Fixed

- fela style template

## 0.2.6 - 2019-07-29

### Removed

- keyboard shortcut

### Fixed

- typo in template

## 0.2.5 - 2019-07-29

## 0.2.4 - 2019-07-29

## 0.2.3 - 2019-07-29

### Changed

- logo

## 0.2.2 - 2019-07-29

## 0.2.1 - 2019-07-29

## 0.2.0 - 2019-07-29

### Added

- create component command

## 0.1.2 - 2019-07-22

### Added

- Snippets for Fela
