import type { RuleModule } from '../../ts-eslint/Rule';
import * as BaseRuleTester from '../../ts-eslint/RuleTester';
import type { DependencyConstraint } from './dependencyConstraints';
declare const TS_ESLINT_PARSER = "@typescript-eslint/parser";
declare type RuleTesterConfig = Omit<BaseRuleTester.RuleTesterConfig, 'parser'> & {
    parser: typeof TS_ESLINT_PARSER;
    /**
     * Constraints that must pass in the current environment for any tests to run
     */
    dependencyConstraints?: DependencyConstraint;
};
interface InvalidTestCase<TMessageIds extends string, TOptions extends Readonly<unknown[]>> extends BaseRuleTester.InvalidTestCase<TMessageIds, TOptions> {
    /**
     * Constraints that must pass in the current environment for the test to run
     */
    dependencyConstraints?: DependencyConstraint;
}
interface ValidTestCase<TOptions extends Readonly<unknown[]>> extends BaseRuleTester.ValidTestCase<TOptions> {
    /**
     * Constraints that must pass in the current environment for the test to run
     */
    dependencyConstraints?: DependencyConstraint;
}
interface RunTests<TMessageIds extends string, TOptions extends Readonly<unknown[]>> {
    readonly valid: readonly (ValidTestCase<TOptions> | string)[];
    readonly invalid: readonly InvalidTestCase<TMessageIds, TOptions>[];
}
declare type AfterAll = (fn: () => void) => void;
declare class RuleTester extends BaseRuleTester.RuleTester {
    #private;
    /**
     * If you supply a value to this property, the rule tester will call this instead of using the version defined on
     * the global namespace.
     */
    static get afterAll(): AfterAll;
    static set afterAll(value: AfterAll | undefined);
    private get staticThis();
    constructor(baseOptions: RuleTesterConfig);
    private getFilename;
    run<TMessageIds extends string, TOptions extends Readonly<unknown[]>>(name: string, rule: RuleModule<TMessageIds, TOptions>, testsReadonly: RunTests<TMessageIds, TOptions>): void;
}
/**
 * Simple no-op tag to mark code samples as "should not format with prettier"
 *   for the internal/plugin-test-formatting lint rule
 */
declare function noFormat(strings: TemplateStringsArray, ...keys: string[]): string;
export { noFormat, RuleTester };
export type { InvalidTestCase, ValidTestCase, RunTests };
//# sourceMappingURL=RuleTester.d.ts.map