# LynxHub Card Module Template

A simple boilerplate repository for building custom LynxHub card modules.

## Development Setup

To develop and test your module locally:

1. Clone this repository directly into the `/module` directory at the root of the LynxHub host application:
   ```bash
   git clone https://github.com/KindaBrazy/LynxHub-Module-Template module
   ```
2. Run the host application in development mode:
   ```bash
   npm run dev
   ```
   The application will detect the `/module` folder and load your code.
3. Verify that your card is registered on the dashboard and boots terminal operations when launched.
4. Run typecheck validation tests:
   ```bash
   npm run typecheck
   ```

## Publishing

To publish your module to the LynxHub plugin registry:

1. Create a dedicated `metadata` branch.
2. Place `metadata.json` and `versioning.json` (samples can be found in `metadata-example/`) in the root of the `metadata` branch.
3. Submit a Pull Request to the global statics registry as detailed in the [Publishing modules](https://lynxhub.dev/plugins/modules/publish) documentation.
