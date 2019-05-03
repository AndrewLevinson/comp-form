

// An application of the minimum rotation
// Given to points p0 and p1, draw a thin cylinder with its
// bases at p0 and p1
module line(p0, p1, diameter=1) {
    v = p1-p0;
    translate(p0)
        // rotate the cylinder so its z axis is brought to direction v
        multmatrix(rotate_from_to([0,0,1],v))
            cylinder(d=diameter, h=norm(v), $fn=4);
}
// Generate the polygonal points for the knot path 
knot = [ for(i=[0:2:360])
         [ (19*cos(3*i) + 40)*cos(2*i),
           (19*cos(3*i) + 40)*sin(2*i),
            19*sin(3*i) ] ];
// Draw the polygonal a segment at a time
for(i=[1:len(knot)-1]) 
     color("white")
    line(knot[i-1], knot[i], diameter=4);




knot2 = [ for(i=[0:2:90])
         [ (9*cos(3*i) + 40)*cos(2*i),
           (9*cos(3*i) + 40)*sin(2*i),
            9*sin(3*i) ] ];
for(i=[1:len(knot2)-1]) 
     color("magenta")
    translate([0,100,10])
    line(knot[i-1], knot[i], diameter=20);


knot3 = [ for(i=[0:2:90])
         [ (19*cos(3*i) + 40)*cos(2*i),
           (19*cos(3*i) + 40)*sin(2*i),
            19*sin(3*i) ] ];
for(i=[1:len(knot3)-1]) 
     color("lightblue")
    translate([100,0,10])
    line(knot[i-1], knot[i], diameter=20);



knot4 = [ for(i=[0:2:180])
         [ (9*cos(3*i) + 40)*cos(2*i),
           (9*cos(3*i) + 40)*sin(2*i),
            9*sin(3*i) ] ];
for(i=[1:len(knot4)-1]) 
    color("lightcoral")
    translate([-100,0,10])
    line(knot[i-1], knot[i], diameter=20);


knot5 = [ for(i=[0:2:180])
         [ (19*cos(3*i) + 40)*cos(2*i),
           (19*cos(3*i) + 40)*sin(2*i),
            19*sin(3*i) ] ];
for(i=[1:len(knot5)-1]) 
    color("pink")
    translate([0,-100,10])
    line(knot[i-1], knot[i], diameter=20);


// Define the sizes for the cylinders, first value is the
// radius, the second is the height.
// All cylinders are to be stacked above each other (with
// an additional spacing of 1 unit).
sizes = [ [ 26, 30 ], [ 20, 50 ], [ 11, 80 ],  [ 5, 10 ], [ 2, 20 ] ];

// One option to solve this is by using a recursive module
// that will create a new translated coordinate system before
// going into the next level.
module translated_cylinder(size_vector, idx = 1) {
    if (idx < len(size_vector)) {
        radius = size_vector[idx][0];
        height = size_vector[idx][1];

        // Create the cylinder for the current level.
        color("white")
        cylinder(r = radius, h = height);

        // Recursive call generating the next cylinders
        // translated in Z direction based on the height
        // of the current cylinder
        translate([0, 0, height + 1]) {
            color("white")
            translated_cylinder(size_vector, idx + 1);
        }
    }
}

// Call the module to create the stacked cylinders.
 translate([0,-100,0])
translated_cylinder(sizes);


 translate([0,0,0])
translated_cylinder(sizes);

 translate([0,100,0])
translated_cylinder(sizes);
