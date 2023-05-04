# Silverstripe CMS supported module skeleton

A useful skeleton to more easily create a [Silverstripe CMS Module](https://docs.silverstripe.org/en/developer_guides/extending/modules/) that conform to the
[Module Standard](https://docs.silverstripe.org/en/developer_guides/extending/modules/#module-standard).

This README contains descriptions of the parts of this module base you should customise to meet you own module needs.
For example, the module name in the H1 above should be you own module name, and the description text you are reading now
is where you should provide a good short explanation of what your module does.

Where possible we have included default text that can be included as is into your module and indicated in
other places where you need to customise it

Below is a template of the sections of your `README.md` you should ideally include to met the Module Standard
and help others make use of your modules.

## Steps to prepare this module for your own use

Ensure you read the
['publishing a module'](https://docs.silverstripe.org/en/developer_guides/extending/how_tos/publish_a_module/) guide
and update your module's `composer.json` to designate your code as a Silversripe CMS module.

- Clone this repository into a folder
- Add your name/organisation to `LICENSE.md`
- Update this README with information about your module. Ensure sections that aren't relevant are deleted and
placeholders are edited where relevant
- Review the README files in the various provided directories. You should ultimately delete these README files when you have added your code
- Update the module's `composer.json` with your requirements and package name
- Update (or remove) `package.json` with your requirements and package name. Run `yarn install` (or remove `yarn.lock`) to
ensure dependencies resolve correctly
- Clear the git history by running `rm -rf .git && git init`
- Add and push to a VCS repository
- Either [publish](https://getcomposer.org/doc/02-libraries.md#publishing-to-packagist) the module on packagist.org, or add a [custom repository](https://getcomposer.org/doc/02-libraries.md#publishing-to-a-vcs) to your main `composer.json`
- Require the module in your main `composer.json`
- If you need to build your css or js and are using components, injector, scss variables, etc from `silverstripe/admin`:
  - Ensure that `silverstripe/admin` is installed with `composer install --prefer-source` instead of the default `--prefer-dist` (you can use `composer reinstall silverstripe/admin --prefer-source` if you already installed it)
  - If you are relying on additional dependencies from `silverstripe/admin` instead of adding them as dependencies in your `package.json` file, you need to install third party dependencies in `silverstripe/admin` by running `yarn install` in the `vendor/silverstripe/admin/` directory.
- Start developing your module!

## License

See [License](LICENSE.md)

This module template defaults to using the "BSD-3-Clause" license. The BSD-3 license is one of the most
permissive open-source license and is used by most Silverstripe CMS module.

To publish your module under a different license:

- update the [`license.md`](LICENSE.md) file
- update the `license' key in your [`composer.json`](composer.json).

You can use [choosealicense.com](https://choosealicense.com) to help you pick a suitable license for your project.

You do not need to keep this section in your README file - the `LICENSE.md` file is sufficient.

## Installation

Replace `silverstripe-module/skeleton` in the command below with the composer name of your module.

```sh
composer require silverstripe-module/skeleton
```

**Note:** When you have completed your module, submit it to Packagist or add it as a VCS repository to your
project's composer.json, pointing to the private repository URL.

## Documentation

- [Documentation readme](docs/en/README.md)

Add links into your `docs/<language>` folder here unless your module only requires minimal documentation
in that case, add here and remove the docs folder. You might use this as a quick table of content if you
mhave multiple documentation pages.

## Example configuration

If your module makes use of the config API in Silverstripe CMS it's a good idea to provide an example config
here that will get the module working out of the box and expose the user to the possible configuration options.
Though note that in many cases simply linking to the documentation is enough.

Provide a syntax-highlighted code examples where possible.

```yaml
Page:
  config_option: true
  another_config:
    - item1
    - item2
```
