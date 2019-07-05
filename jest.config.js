module.exports = {
    setupFiles: ['<rootDir>/.jest/register-context.js'],
    coveragePathIgnorePatterns: ['node_modules', '.storybook/', 'dist'],
    coverageDirectory: './coverage/',
    collectCoverage: true,
}
