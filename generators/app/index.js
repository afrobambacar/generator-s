'use strict';

const path = require('path');
const Generator = require('yeoman-generator');
const askName = require('inquirer-npm-name');
const _ = require('lodash');
const extend = require('deep-extend');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
	initializing () {
		this.props = {};
	}

	prompting () {
		return askName({
			name: 'name',
			message: 'Your project name?',
			default: path.basename(process.cwd()),
			filter: _.kebabCase,
			validate: str => {
				return str.length > 0;
			}
		}, this).then(props => {
			this.props.name = props.name;
		});
	}

	configuring () {}

	default () {
		if (path.basename(this.destinationPath()) !== this.props.name) {
			this.log('I\'ll automatically create project folder named ' + this.props.name);
			mkdirp(this.props.name);
			this.destinationRoot(this.destinationPath(this.props.name));
		}

		this.fs.copy(
			this.templatePath('**/**'),
			this.destinationPath()
		);
	}

	writing () {
		const currentPkg = this.fs.readJSON(this.destinationPath('package.json'), {});
		const pkg = extend(currentPkg, {
			name: _.kebabCase(this.props.name),
			version: '0.0.0',
		});
		
		this.fs.writeJSON(this.destinationPath('package.json'), pkg);

		this.fs.copyTpl(
			this.templatePath('README.md'),
			this.destinationPath('README.md'),
			{ projectName: this.props.name }
		);
	}

	conflicts () {}

	install () {
		this.installDependencies({
			bower: false
		});
	}

	end () {
		this.log('You can run this app with \'$ gulp serve\'!');
	}
};