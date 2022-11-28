from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in emis/__init__.py
from emis import __version__ as version

setup(
	name="emis",
	version=version,
	description="emis",
	author="umer",
	author_email="u.farooq@pk.micromerger.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
