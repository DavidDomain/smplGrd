# smplGrd

Just another simple, responsive, mobile first, nestable css grid system build with less.

## Demo
[david-domain.com/smpl-grd](http://david-domain.com/smpl-grd)

## Features
* Use either a fixed width container (.container) or a full width container (.container-fluid).
* 12 columns (can be changed either inside the variables.less file or from the Grunt.js file).
* Two types of columns (.col-lrg-\*, .col-sml-\*).
* Large columns will stack when hitting the mobile breakpoint.
* Small columns will not stack on top of each other.
* Offset columns by adding offset classes (.col-[lrg/sml]-*-offset) to columns.
* Auto clearing floats with pseudo after element on rows.
* Nest columns inside of columns (gutter will be removed on nested columns).
* Auto adjust gutter size by half below moblie breakpoint.


## Usage
Columns live inside of rows and rows live inside of containers.
A simple grid layout with a sidebar on the left and a main content area on the right would look like this:

		<div class="container">
			<div class="row">
				<div class="col-lrg-4>
					sidebar content goes here.
				</div>
				<div class="col-lrg-8>
					main content goes here.
				</div>
			</div>
		</div>

These two columns would stack on top of each other when hitting the mobile breakpoint.
To avoide stacking just use .col-sml-* classes instead.

## Browser support
Works in all modern browsers. To support IE8 respond.js and html5shiv.js is required.

	<!--[if IE 8]>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->

## Notes
To use the Grunt.js config file just run:
		% npm install
		
## License
smplGrd is licensed under the [MIT License](http://opensource.org/licenses/MIT).