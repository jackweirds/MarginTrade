// tests/margintrade.test.js
/**
 * Tests for MarginTrade module
 */

const { MarginTrade } = require('../src/margintrade');

describe('MarginTrade', () => {
    let instance;

    beforeEach(() => {
        instance = new MarginTrade({ verbose: false });
    });

    test('should create instance with default config', () => {
        expect(instance).toBeDefined();
        expect(instance.timeout).toBe(30000);
        expect(instance.maxRetries).toBe(3);
    });

    test('should execute successfully', async () => {
        const result = await instance.execute();
        expect(result.success).toBe(true);
        expect(result.message).toBeTruthy();
    });

    test('should process data', async () => {
        const result = await instance.process();
        expect(result.processed).toBe(true);
    });
});
