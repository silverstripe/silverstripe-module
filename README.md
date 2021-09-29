# SilverStripe supported module skeleton

A useful skeleton to more easily create a [Silverstripe Module](https://docs.silverstripe.org/en/4/developer_guides/extending/modules/) that conform to the
[Module Standard](https://docs.silverstripe.org/en/developer_guides/extending/modules/#module-standard).

This readme contains descriptions of the parts of this module base you should customise to meet you own module needs.
For example, the module name in the H1 above should be you own module name, and the description text you are reading now
is where you should provide a good short explanation of what your module does.

Where possible we have included default text that can be included as is into your module and indicated in 
other places where you need to customise it

Below is a template of the sections of your readme.md you should ideally include to met the Module Standard 
and help others make use of your modules.

### Steps to prepare this module for your own use:

- Clone this repository into a folder
- Add your name/organisation to `LICENSE.md`
- Update this readme with information about your module. Ensure sections that aren't relevant are deleted and 
placeholders are edited where relevant
- Review the README files in the various provided directories. You should replace these with `.gitkeep` or delete the 
directories
- Update the module's `composer.json` with your requirements and package name
- Update (or remove) `package.json` with your requirements and package name. Run `yarn` (or remove `yarn.lock`) to 
ensure dependencies resolve correctly
- Clear the git history by running `rm -rf .git && git init`
- Add and push to a VCS repository
- Either [publish](https://getcomposer.org/doc/02-libraries.md#publishing-to-packagist) the module on packagist.org, or add a [custom repository](https://getcomposer.org/doc/02-libraries.md#publishing-to-a-vcs) to your main `composer.json`
- Require the module in your main `composer.json`
- If you need to build a JS client
  - Ensure that `vendor/silverstripe/admin` is installed with `composer install --prefer-source` instead of the default `--prefer-dist`.  You may need to first remove the module from the vendor folder.
  - Install third party dependencies in your module AND in `vendor/silverstripe/admin` by running `yarn install` in both locations
- Start developing your module!

## Requirements

* SilverStripe ^4.0
* [Yarn](https://yarnpkg.com/lang/en/), [NodeJS](https://nodejs.org/en/) (6.x) and [npm](https://npmjs.com) (for building
  frontend assets)
* Other module
* Other server requirement
* Etc

## Installation
Add some installation instructions here, having a 1 line composer copy and paste is useful. 
Here is a composer command to create a new module project. Ensure you read the
['publishing a module'](https://docs.silverstripe.org/en/developer_guides/extending/how_tos/publish_a_module/) guide
and update your module's composer.json to designate your code as a SilverStripe module. 

```
composer require silverstripe-module/skeleton 4.x-dev
```

**Note:** When you have completed your module, submit it to Packagist or add it as a VCS repository to your
project's composer.json, pointing to the private repository URL.

## License
See [License](license.md)

We have included a 3-clause BSD license you can use as a default. We advocate for the BSD license as 
it is one of the most permissive and open licenses.

Feel free to alter the [license.md](license.md) to suit if you wan to use an alternative license.
You can use [choosealicense.com](http://choosealicense.com) to help pick a suitable license for your project.

## Documentation
 * [Documentation readme](docs/en/readme.md)

Add links into your docs/<language> folder here unless your module only requires minimal documentation 
in that case, add here and remove the docs folder. You might use this as a quick table of content if you
mhave multiple documentation pages.

## Example configuration (optional)
If your module makes use of the config API in SilverStripe it's a good idea to provide an example config
 here that will get the module working out of the box and expose the user to the possible configuration options.

Provide a yaml code example where possible.

```yaml

Page:
  config_option: true
  another_config:
    - item1
    - item2
  
```

## Maintainers
 * Person here <person@emailaddress.com>
 * Another maintainer <maintain@emailaddress.com>
 
## Bugtracker
Bugs are tracked in the issues section of this repository. Before submitting an issue please read over 
existing issues to ensure yours is unique. 
 
If the issue does look like a new bug:
 
 - Create a new issue
 - Describe the steps required to reproduce your issue, and the expected outcome. Unit tests, screenshots 
 and screencasts can help here.
 - Describe your environment as detailed as possible: SilverStripe version, Browser, PHP version, 
 Operating System, any installed SilverStripe modules.
 
Please report security issues to the module maintainers directly. Please don't file security issues in the bugtracker.
 
## Development and contribution
If you would like to make contributions to the module please ensure you raise a pull request and discuss with the module maintainers.
