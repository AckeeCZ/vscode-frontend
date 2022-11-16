import type { Configuration } from "../../types";
import { component, felaComponent, felaHookComponent, styles } from "../componentsTypescript";

describe("TS component template", function () {
  describe("felaComponent", function () {
    it("should generate template with custom name", function () {
      const config = {
        includeReactImport: true,
        moduleDependencies: true,
      } as Configuration;

      const expectedTemplate = `
interface MyFelaComponentProps extends FelaWithStylesProps<MyFelaComponentOwnProps, typeof felaRules> {}

export const MyFelaComponent = ({ styles }: MyFelaComponentProps) => {
    return (
      <div className={styles.container}>

      </div>
    );  
};
`;

      const component = felaComponent("MyFelaComponent", config);

      expect(component).toContain(`import * as felaRules from './MyFelaComponent.rules';`);
      expect(component).toContain(`export interface MyFelaComponentOwnProps {`);
      expect(component).toContain(expectedTemplate);
    });

    it("should import FelaWithStylesProps from dependencies along with React", function () {
      const config = {
        moduleDependencies: true,
        includeReactImport: true,
      } as Configuration;

      expect(felaComponent("MyFelaComponent", config)).toContain(
        `import { React, FelaWithStylesProps } from '../../dependencies';`
      );
      expect(felaComponent("MyFelaComponent", config)).not.toContain("react-fela");
    });

    it("should import FelaWithStylesProps from dependencies without React", function () {
      const config = {
        moduleDependencies: true,
        includeReactImport: false,
      } as Configuration;

      expect(felaComponent("MyFelaComponent", config)).toContain(
        `import { FelaWithStylesProps } from '../../dependencies';`
      );
      expect(felaComponent("MyFelaComponent", config)).not.toContain("react-fela");
    });

    it("should import FelaWithStylesProps from react-fela along with React", function () {
      const config = {
        moduleDependencies: false,
        includeReactImport: true,
      } as Configuration;

      expect(felaComponent("MyFelaComponent", config)).toContain(
        `import React from 'react';\nimport type { FelaWithStylesProps } from 'react-fela';`
      );
      expect(felaComponent("MyFelaComponent", config)).not.toContain("../dependencies");
    });

    it("should import FelaWithStylesProps from react-fela without React", function () {
      const config = {
        moduleDependencies: false,
        includeReactImport: false,
      } as Configuration;

      expect(felaComponent("MyFelaComponent", config)).toContain(
        `import type { FelaWithStylesProps } from 'react-fela';`
      );
      expect(felaComponent("MyFelaComponent", config)).not.toContain("../dependencies");
    });

    it("should generate extend prop with fela theme", function () {
      const config = {
        typescriptFelaExtendProp: true,
        typescriptFelaTheme: true,
      } as Configuration;

      expect(felaComponent("MyFelaComponent", config)).toContain(`extend?: RulesExtend<typeof felaRules>;`);
    });

    it("should import RulesExtend from @ackee/fela", function () {
      const config = {
        typescriptFelaExtendProp: true,
        typescriptFelaTheme: true,
        useAckeeFelaPackage: true,
      } as Configuration;

      expect(felaComponent("MyFelaComponent", config)).toContain(`import type { RulesExtend } from '@ackee/fela`);
      expect(felaComponent("MyFelaComponent", config)).not.toContain(`import type { RulesExtend } from 'styles/theme`);
      expect(felaComponent("MyFelaComponent", config)).not.toContain(`import type { TRule } from 'fela';`);
    });

    it("should import RulesExtend from styles/theme", function () {
      const config = {
        typescriptFelaExtendProp: true,
        typescriptFelaTheme: true,
        useAckeeFelaPackage: false,
      } as Configuration;

      expect(felaComponent("MyFelaComponent", config)).toContain(`import type { RulesExtend } from 'styles/theme`);
      expect(felaComponent("MyFelaComponent", config)).not.toContain(`import type { RulesExtend } from '@ackee/fela`);
      expect(felaComponent("MyFelaComponent", config)).not.toContain(`import type { TRule } from 'fela';`);
    });

    it("should import TRule from fela", function () {
      const config = {
        typescriptFelaExtendProp: true,
        typescriptFelaTheme: false,
      } as Configuration;

      expect(felaComponent("MyFelaComponent", config)).toContain(`import type { TRule } from 'fela';`);
      expect(felaComponent("MyFelaComponent", config)).not.toContain(`import type { RulesExtend } from 'styles/theme`);
      expect(felaComponent("MyFelaComponent", config)).not.toContain(`import type { RulesExtend } from '@ackee/fela`);
    });

    it("should not not import TRule nor RulesExtend", function () {
      const config = {
        typescriptFelaExtendProp: false,
        typescriptFelaTheme: true,
      } as Configuration;

      expect(felaComponent("MyFelaComponent", config)).not.toContain(`import type { RulesExtend`);
      expect(felaComponent("MyFelaComponent", config)).not.toContain(`import type { TRule`);

      const config2 = {
        typescriptFelaExtendProp: false,
        typescriptFelaTheme: false,
      } as Configuration;

      expect(felaComponent("MyFelaComponent", config)).not.toContain(`import type { RulesExtend`);
      expect(felaComponent("MyFelaComponent", config)).not.toContain(`import type { TRule`);
    });

    it("should generate extend prop with fela theme", function () {
      const config = {
        typescriptFelaExtendProp: true,
        typescriptFelaTheme: true,
      } as Configuration;

      expect(felaComponent("MyFelaComponent", config)).toContain(`extend?: RulesExtend<typeof felaRules>;`);
    });

    it("should generate extend prop without fela theme", function () {
      const config = {
        typescriptFelaExtendProp: true,
        typescriptFelaTheme: false,
      } as Configuration;

      expect(felaComponent("MyFelaComponent", config)).toContain(
        `extend?: Partial<Record<keyof typeof felaRules, TRule>>;`
      );
    });

    it("should not generate extend prop", function () {
      const config = {
        typescriptFelaExtendProp: false,
        typescriptFelaTheme: true,
      } as Configuration;

      expect(felaComponent("MyFelaComponent", config)).not.toContain(`extend?:`);

      const config2 = {
        typescriptFelaExtendProp: false,
        typescriptFelaTheme: false,
      } as Configuration;

      expect(felaComponent("MyFelaComponent", config)).not.toContain(`extend?:`);
    });
  });

  describe("felaHookComponent", function () {
    it("should generate template with custom name and extend prop", function () {
      const config = {
        typescriptFelaExtendProp: true,
      } as Configuration;

      const expectedTemplate = `
export const MyFelaHookComponent = ({ extend }: MyFelaHookComponentProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    return (
        <div className={styles.container}>

        </div>
    );
};
`;

      const component = felaHookComponent("MyFelaHookComponent", config);

      expect(component).toContain(`import * as felaRules from './MyFelaHookComponent.rules';`);
      expect(component).toContain(`export interface MyFelaHookComponentProps {`);
      expect(component).toContain(expectedTemplate);
    });

    it("should generate template with custom name without extend prop", function () {
      const config = {
        typescriptFelaExtendProp: false,
      } as Configuration;

      const expectedTemplate = `
export const MyFelaHookComponent = ({  }: MyFelaHookComponentProps) => {
    const { styles } = useFelaEnhanced(felaRules);

    return (
        <div className={styles.container}>

        </div>
    );
};
`;

      const component = felaHookComponent("MyFelaHookComponent", config);

      expect(component).toContain(`import * as felaRules from './MyFelaHookComponent.rules';`);
      expect(component).toContain(`export interface MyFelaHookComponentProps {`);
      expect(component).toContain(expectedTemplate);
    });

    it("should generate extend prop with fela theme", function () {
      const config = {
        typescriptFelaExtendProp: true,
        typescriptFelaTheme: true,
      } as Configuration;

      expect(felaHookComponent("MyFelaHookComponent", config)).toContain(`extend?: RulesExtend<typeof felaRules>;`);
    });

    it("should import RulesExtend from @ackee/fela", function () {
      const config = {
        typescriptFelaExtendProp: true,
        typescriptFelaTheme: true,
        useAckeeFelaPackage: true,
      } as Configuration;

      expect(felaHookComponent("MyFelaHookComponent", config)).toContain(
        `import type { RulesExtend } from '@ackee/fela`
      );
      expect(felaHookComponent("MyFelaHookComponent", config)).not.toContain(
        `import type { RulesExtend } from 'styles/theme`
      );
      expect(felaHookComponent("MyFelaHookComponent", config)).not.toContain(`import type { TRule } from 'fela';`);
    });

    it("should import RulesExtend from styles/theme", function () {
      const config = {
        typescriptFelaExtendProp: true,
        typescriptFelaTheme: true,
        useAckeeFelaPackage: false,
      } as Configuration;

      expect(felaHookComponent("MyFelaHookComponent", config)).toContain(
        `import type { RulesExtend } from 'styles/theme`
      );
      expect(felaHookComponent("MyFelaHookComponent", config)).not.toContain(
        `import type { RulesExtend } from '@ackee/fela`
      );
      expect(felaHookComponent("MyFelaHookComponent", config)).not.toContain(`import type { TRule } from 'fela';`);
    });

    it("should import TRule from fela", function () {
      const config = {
        typescriptFelaExtendProp: true,
        typescriptFelaTheme: false,
      } as Configuration;

      expect(felaHookComponent("MyFelaHookComponent", config)).toContain(`import type { TRule } from 'fela';`);
      expect(felaHookComponent("MyFelaHookComponent", config)).not.toContain(
        `import type { RulesExtend } from 'styles/theme`
      );
      expect(felaHookComponent("MyFelaHookComponent", config)).not.toContain(
        `import type { RulesExtend } from '@ackee/fela`
      );
    });

    it("should not not import TRule nor RulesExtend", function () {
      const config = {
        typescriptFelaExtendProp: false,
        typescriptFelaTheme: true,
      } as Configuration;

      expect(felaHookComponent("MyFelaHookComponent", config)).not.toContain(`import type { RulesExtend`);
      expect(felaHookComponent("MyFelaHookComponent", config)).not.toContain(`import type { TRule`);

      const config2 = {
        typescriptFelaExtendProp: false,
        typescriptFelaTheme: false,
      } as Configuration;

      expect(felaHookComponent("MyFelaHookComponent", config)).not.toContain(`import type { RulesExtend`);
      expect(felaHookComponent("MyFelaHookComponent", config)).not.toContain(`import type { TRule`);
    });

    it("should generate extend prop with fela theme", function () {
      const config = {
        typescriptFelaExtendProp: true,
        typescriptFelaTheme: true,
      } as Configuration;

      expect(felaHookComponent("MyFelaHookComponent", config)).toContain(`extend?: RulesExtend<typeof felaRules>;`);
    });

    it("should generate extend prop without fela theme", function () {
      const config = {
        typescriptFelaExtendProp: true,
        typescriptFelaTheme: false,
      } as Configuration;

      expect(felaHookComponent("MyFelaHookComponent", config)).toContain(
        `extend?: Partial<Record<keyof typeof felaRules, TRule>>;`
      );
    });

    it("should not generate extend prop", function () {
      const config = {
        typescriptFelaExtendProp: false,
        typescriptFelaTheme: true,
      } as Configuration;

      expect(felaHookComponent("MyFelaHookComponent", config)).not.toContain(`extend?:`);

      const config2 = {
        typescriptFelaExtendProp: false,
        typescriptFelaTheme: false,
      } as Configuration;

      expect(felaHookComponent("MyFelaHookComponent", config)).not.toContain(`extend?:`);
    });
  });

  describe("styles", function () {
    it("should use TRuleWithTheme", function () {
      const config = {
        typescriptFelaTheme: true,
      } as Configuration;

      expect(styles(config)).not.toContain(`export const container: TRule = () => ({});`);
      expect(styles(config)).toContain(`export const container: TRuleWithTheme = () => ({});`);
      expect(styles(config)).not.toContain(`import type { TRule } from `);
    });

    it("should import TRuleWithTheme from dependencies", function () {
      const config = {
        typescriptFelaTheme: true,
        moduleDependencies: true,
        useAckeeFelaPackage: false,
      } as Configuration;

      expect(styles(config)).toContain(`import type { TRuleWithTheme } from '../../dependencies';`);
    });

    it("should import TRuleWithTheme from @ackee/fela", function () {
      const config = {
        typescriptFelaTheme: true,
        moduleDependencies: false,
        useAckeeFelaPackage: true,
      } as Configuration;

      expect(styles(config)).toContain(`import type { TRuleWithTheme } from '@ackee/fela';`);
    });

    it("should import TRuleWithTheme from styles/theme", function () {
      const config = {
        typescriptFelaTheme: true,
        moduleDependencies: false,
        useAckeeFelaPackage: false,
      } as Configuration;

      expect(styles(config)).toContain(`import type { TRuleWithTheme } from 'styles/theme';`);
    });

    it("should use TRule", function () {
      const config = {
        typescriptFelaTheme: false,
      } as Configuration;

      expect(styles(config)).not.toContain(`export const container: TRuleWithTheme = () => ({});`);
      expect(styles(config)).toContain(`export const container: TRule = () => ({});`);
      expect(styles(config)).toContain(`import type { TRule } from `);
    });

    it("should import TRule from dependencies", function () {
      const config = {
        typescriptFelaTheme: false,
        moduleDependencies: true,
      } as Configuration;

      expect(styles(config)).toContain(`import type { TRule } from '../../dependencies';`);
    });

    it("should import TRule from fela", function () {
      const config = {
        typescriptFelaTheme: false,
        moduleDependencies: false,
      } as Configuration;

      expect(styles(config)).toContain(`import type { TRule } from 'fela';`);
    });
  });

  describe("component", function () {
    const depsImport = "import { React } from '../../dependencies';";
    const pkgImport = "import React from 'react';";

    it("should generate template with custom name", function () {
      const config = {
        includeReactImport: true,
        moduleDependencies: true,
      } as Configuration;

      const expectedTemplate = `
export interface MyComponentProps {}

export const MyComponent = ({}: MyComponentProps) => {
  return (
    <>
    
    </>
  );  
};
`;

      expect(component("MyComponent", config)).toContain(expectedTemplate);
    });

    it("should import react from dependencies", function () {
      const config = {
        includeReactImport: true,
        moduleDependencies: true,
      } as Configuration;

      expect(component("Doesnt matter", config)).toContain(depsImport);
      expect(component("Doesnt matter", config)).not.toContain(pkgImport);
    });

    it("should import react from react package", function () {
      const config = {
        includeReactImport: true,
        moduleDependencies: false,
      } as Configuration;

      expect(component("Doesnt matter", config)).not.toContain(depsImport);
      expect(component("Doesnt matter", config)).toContain(pkgImport);
    });

    it("should not import react", function () {
      const config = {
        includeReactImport: false,
        moduleDependencies: true,
      } as Configuration;

      const config2 = {
        includeReactImport: false,
        moduleDependencies: false,
      } as Configuration;

      expect(component("Doesnt matter", config)).not.toContain(depsImport);
      expect(component("Doesnt matter", config)).not.toContain(pkgImport);

      expect(component("Doesnt matter", config2)).not.toContain(depsImport);
      expect(component("Doesnt matter", config2)).not.toContain(pkgImport);
    });
  });
});
