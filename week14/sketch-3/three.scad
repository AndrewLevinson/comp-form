size = 50;
hole = 25;

function r_from_dia(d) = d / 2;

cy_r = r_from_dia(hole);
cy_h = r_from_dia(size * 2.5);

module rotcy(rot, r, h) {
    rotate(90, rot)
      cylinder(r = r, h = h, center = true);
}

//rotcy(0, 100, 40)

difference() {
    sphere(r = r_from_dia(size));
    rotcy([0, 0, 0], cy_r, cy_h);
    rotcy([1, 0, 0], cy_r, cy_h);
    rotcy([0, 1, 0], cy_r, cy_h);
}

