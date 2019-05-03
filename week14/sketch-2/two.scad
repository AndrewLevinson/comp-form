// The idea is to twist a translated circle:
// -
/*
	linear_extrude(height = 10, twist = 360, scale = 0)
	translate([1,0])
	circle(r = 1);
*/

module 

horn(height = 10, radius = 3, 
			twist = 720, $fn = 50) 
{
	// A centered circle translated by 1xR and 
	// twisted by 360° degrees, covers a 2x(2xR) space.
	// -
	radius = radius/8;
	// De-translate.
	// -
	translate([-radius,0])
	// The actual code.
	// -
	linear_extrude(height = height, twist = twist, 
				   scale=10, $fn = $fn)
	translate([radius,0])
	circle(r=radius);
    
}

translate([10,0])
mirror()
color("pink")
horn();
translate([10, 0, -10])
color("black")
horn();

translate([-10,0])
color("lightblue")
horn();
translate([-10, 0, -10])
color("black")
horn();

translate([0,10])
color("coral")
horn();
translate([0, 10, -10])
color("black")
horn();

translate([0,-10])
color("teal")
horn();
translate([0, -10, -10])
color("black")
horn();