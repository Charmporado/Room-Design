const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Light
const light = new THREE.DirectionalLight( 0xffe6ff, 1 );
light.position.set(10, 30, 20);
scene.add( light );

// Moonlight
const moonLight = new THREE.PointLight( 0x404040, 3);
moonLight.position.set( -2,22,-46 );
scene.add( moonLight );

// Materials
const floorMat= new THREE.MeshBasicMaterial({color:0x68587e});
const carpetMat = new THREE.MeshLambertMaterial({color:0xaa80ff});
const carpetDesignMat = new THREE.MeshLambertMaterial({color:0xffcc66});
const wallMatR = new THREE.MeshLambertMaterial({color:0x9f84c8});
const wallMatL = new THREE.MeshLambertMaterial({color:0x8968bb});
const bedMat = new THREE.MeshLambertMaterial({color:0xc08c9b});
const pillowMat = new THREE.MeshLambertMaterial({color:0xffe6ff});
const mattMat = new THREE.MeshLambertMaterial({color:0x694c6b});
const wood = new THREE.MeshLambertMaterial({color:0xc08c9b});
const moonMat = new THREE.MeshBasicMaterial({color: 0xeee790});
const starMat = new THREE.MeshBasicMaterial({color: 0xffffff});
const moniMat = new THREE.MeshLambertMaterial({color:0xffffff});
const pcMat = new THREE.MeshPhysicalMaterial({color:0xffffff});
const chairMat = new THREE.MeshLambertMaterial({color:0x707070});
const doorFrameMat = new THREE.MeshLambertMaterial({color:0xaa80ff});
const glass = new THREE.MeshLambertMaterial({color:0x576194});

// Floor
const floorGeo = new THREE.BoxGeometry(100,1, 100);
const floor = new THREE.Mesh( floorGeo, floorMat );
floor.position.set(0,0,0);
scene.add(floor);

// Carpet
const carpetGeo = new THREE.CircleGeometry( 20, 20 );
const carpet = new THREE.Mesh( carpetGeo, carpetMat );
carpet.position.set(2,2,13);
carpet.rotation.set(4.7, 0, 5);
scene.add( carpet );

// Carpet Design
const carpetD1Geo = new THREE.RingGeometry( 12, 15, 32 );
const carpetDesign1 = new THREE.Mesh( carpetD1Geo, carpetDesignMat );
carpetDesign1.position.set(2,3,13);
carpetDesign1.rotation.set(4.7, 0, 5);
scene.add( carpetDesign1 );

const carpetD2Geo = new THREE.RingGeometry( 4, 7, 30 );
const carpetDesign2 = new THREE.Mesh( carpetD2Geo, carpetDesignMat );
carpetDesign2.position.set(2,3,13);
carpetDesign2.rotation.set(4.7, 0, 5);
scene.add( carpetDesign2 );

// Wall Right
const wallRGeo = new THREE.BoxGeometry(100, 40, 1);
const wallR = new THREE.Mesh(wallRGeo, wallMatR);
wallR.position.set(0,20,-50);
scene.add(wallR);

// Wall Left
const wallLGeo = new THREE.BoxGeometry(1, 40, 100);
const wallL = new THREE.Mesh(wallLGeo, wallMatL);
wallL.position.set(-50,20,0);
scene.add(wallL);

// Bed
// Bed Bottom Frame
const bedGeo = new THREE.BoxGeometry(30, 3, 35);
const bed = new THREE.Mesh(bedGeo, wood);
bed.position.set(10,10,-20);
bed.rotation.set(0,0,0);
scene.add(bed);

// Bed Head Frame
const bedHGeo = new THREE.BoxGeometry(30, 8, 1)
const bedH = new THREE.Mesh(bedHGeo, wood);
bedH.position.set(10,13,-37);
bedH.rotation.set(0,0,0);
scene.add(bedH);

// Bed Feet Frame
const bedFGeo = new THREE.BoxGeometry(30, 8, 1)
const bedF = new THREE.Mesh(bedFGeo, wood);
bedF.position.set(10,12,-2);
bedF.rotation.set(0,0,0);
scene.add(bedF);

// Pillows
const pillowGeo = new THREE.BoxGeometry(25, 4, 5);
const pillow = new THREE.Mesh(pillowGeo, pillowMat);
pillow.position.set(10,13,-33);
scene.add(pillow);

// Mattress
const mattGeo = new THREE.BoxGeometry(27, 4, 25);
const matt = new THREE.Mesh(mattGeo, mattMat);
matt.position.set(11,13,-15);
scene.add(matt);

// Window
// Window Glass
const glassGeo = new THREE.PlaneGeometry(23,8,3);
const glassWindow = new THREE.Mesh(glassGeo, glass);
glassWindow.position.set(5.5,20.5,-48.4);
scene.add(glassWindow);

// Window Frame
const windowFGeo = new THREE.BoxGeometry(25,10,3);
const windowF = new THREE.Mesh(windowFGeo, wood);
windowF.position.set(5,20, -50);
scene.add(windowF);

const stick1Geo = new THREE.BoxGeometry(1,10,3);
const stick1 = new THREE.Mesh(stick1Geo, wood);
stick1.position.set(5,20, -49.5);
scene.add(stick1);

const stick2Geo = new THREE.BoxGeometry(25,1,3);
const stick2 = new THREE.Mesh(stick2Geo, wood);
stick2.position.set(5,20, -49.5);
scene.add(stick2);

// Moon
const moonGeo = new THREE.CircleGeometry( 1.5, 30 );
const moon = new THREE.Mesh( moonGeo, moonMat );
moon.position.set( 0,24,-45 );
scene.add( moon );

// Stars
const star1Geo = new THREE.CircleGeometry( 0.1, 30 );
const star1 = new THREE.Mesh( star1Geo, starMat );
star1.position.set( 0,19.5,-45 );
scene.add( star1 );

const star2Geo = new THREE.CircleGeometry( 0.3, 30 );
const star2 = new THREE.Mesh( star2Geo, starMat );
star2.position.set( 5,24,-45 );
scene.add( star2 );

const star3Geo = new THREE.CircleGeometry( 0.1, 30 );
const star3 = new THREE.Mesh( star3Geo, starMat );
star3.position.set( 13,20,-45 );
scene.add( star3 );

const star4Geo = new THREE.CircleGeometry( 0.1, 30 );
const star4 = new THREE.Mesh( star4Geo, starMat );
star4.position.set( 15,24,-45 );
scene.add( star4 );

// Table
// Table Frame
const tableGeo = new THREE.BoxGeometry(10,2,30);
const table = new THREE.Mesh(tableGeo, wood);
table.position.set(50,20,20);
scene.add(table);

// Table Leg 1
const leg1Geo = new THREE.BoxGeometry(1,10,1);
const leg1 = new THREE.Mesh(leg1Geo, wood);
leg1.position.set(53,15,32);
scene.add(leg1);

// Table Leg 2
const leg2Geo = new THREE.BoxGeometry(1,10,1);
const leg2 = new THREE.Mesh(leg2Geo, wood);
leg2.position.set(45,15,32);
scene.add(leg2);

// Table Leg 3
const leg3Geo = new THREE.BoxGeometry(1,10,1);
const leg3 = new THREE.Mesh(leg3Geo, wood);
leg3.position.set(53,15,5);
scene.add(leg3);

// Table Leg 4
const leg4Geo = new THREE.BoxGeometry(1,10,1);
const leg4 = new THREE.Mesh(leg4Geo, wood);
leg4.position.set(45,15,5);
scene.add(leg4);

// Monitors
// Monitor 1
const moniGeo = new THREE.BoxGeometry(1,7,15);
const moni = new THREE.Mesh(moniGeo, moniMat);
moni.position.set(52,26,14);
scene.add(moni);

// Monitor 1 Leg
const moni1LegGeo = new THREE.BoxGeometry(1,5,1);
const moni1Leg = new THREE.Mesh(moni1LegGeo, moniMat);
moni1Leg.position.set(53,23,13);
scene.add(moni1Leg);

// Monitor 1 Stand
const moni1StandGeo = new THREE.CircleGeometry( 2, 20 );
const moni1Stand = new THREE.Mesh( moni1StandGeo, moniMat );
moni1Stand.position.set(53,22,13);
moni1Stand.rotation.set(4.7, 0, 5);
scene.add( moni1Stand );

// Monitor 2
const moni2Geo = new THREE.BoxGeometry(1,7,15);
const moni2 = new THREE.Mesh(moni2Geo, moniMat);
moni2.position.set(48,26,29);
moni2.rotation.set(0,2.5,0);
scene.add(moni2);

// Monitor 2 Leg
const moni2LegGeo = new THREE.BoxGeometry(1,5,1);
const moni2Leg = new THREE.Mesh(moni2LegGeo, moniMat);
moni2Leg.position.set(49,23,29);
moni2Leg.rotation.set(0,2.5,0);
scene.add(moni2Leg);

// Monitor 2 Stand
const moni2StandGeo = new THREE.CircleGeometry( 2, 20 );
const moni2Stand = new THREE.Mesh( moni2StandGeo, moniMat );
moni2Stand.position.set(49,22,29);
moni2Stand.rotation.set(4.7, 0, 0);
scene.add( moni2Stand );

// PC Table
const pcTableGeo = new THREE.BoxGeometry(10,1,7);
const pcTable = new THREE.Mesh(pcTableGeo, wood);
pcTable.position.set(50,20,40);
scene.add(pcTable);

const pcTable2Geo = new THREE.BoxGeometry(9,7,6);
const pcTable2 = new THREE.Mesh(pcTable2Geo, wood);
pcTable2.position.set(49.5,15,39.5);
scene.add(pcTable2);

// PC
const pcGeo = new THREE.BoxGeometry(5,7,2);
const pc = new THREE.Mesh(pcGeo, pcMat);
pc.position.set(49.5,22,39.5);
scene.add(pc);

// Chair
const chairHeadGeo = new THREE.BoxGeometry(1,4,7);
const chairHead = new THREE.Mesh(chairHeadGeo, chairMat);
chairHead.position.set(38,30,18);
chairHead.rotation.set(0, 5, 0);
scene.add(chairHead);

const chairStemGeo = new THREE.BoxGeometry(0.5,5,1);
const chairStem = new THREE.Mesh(chairStemGeo, chairMat);
chairStem.position.set(38,26,18);
scene.add(chairStem);

const chairGeo = new THREE.BoxGeometry(6,1,6);
const chair = new THREE.Mesh(chairGeo, chairMat);
chair.position.set(36.5,23,14);
chair.rotation.set(0, 5, 0);
scene.add(chair);

const chairLeg1Geo = new THREE.BoxGeometry(0.5,4,1);
const chairLeg1 = new THREE.Mesh(chairLeg1Geo, chairMat);
chairLeg1.position.set(33,18,14);
scene.add(chairLeg1);

const chairLeg2Geo = new THREE.BoxGeometry(0.5,4,1);
const chairLeg2 = new THREE.Mesh(chairLeg2Geo, chairMat);
chairLeg2.position.set(38,19,14);
scene.add(chairLeg2);

const chairLeg3Geo = new THREE.BoxGeometry(0.5,4,1);
const chairLeg3 = new THREE.Mesh(chairLeg3Geo, chairMat);
chairLeg3.position.set(37.4,19,10);
scene.add(chairLeg3);

// PC Table
const TableGeo = new THREE.BoxGeometry(10,1,7);
const Table = new THREE.Mesh(TableGeo, wood);
Table.position.set(30,11,-40);
scene.add(Table);

const Table2Geo = new THREE.BoxGeometry(9,7,6);
const Table2 = new THREE.Mesh(Table2Geo, wood);
Table2.position.set(30,8,-40);
scene.add(Table2);

// Drawer
const drawerGeo = new THREE.BoxGeometry(8,4,6);
const drawer = new THREE.Mesh(drawerGeo, wood);
drawer.position.set(30,8,-39);
scene.add(drawer);

const drawerKnobGeo = new THREE.SphereGeometry(0.8,30);
const drawerKnob = new THREE.Mesh(drawerKnobGeo, wood);
drawerKnob.position.set(30.5,8.5,-35);
scene.add(drawerKnob);

// Cabinet
const cabinetFGeo = new THREE.BoxGeometry(15,1.5,50);
const cabinetFeet = new THREE.Mesh(cabinetFGeo, wood);
cabinetFeet.position.set(-40,2,-24);
scene.add(cabinetFeet);

const cabinetGeo = new THREE.BoxGeometry(13,45,48);
const cabinet = new THREE.Mesh(cabinetGeo, wood);
cabinet.position.set(-40,4,-24);
scene.add(cabinet);

const cabinetHGeo = new THREE.BoxGeometry(15,1.5,50);
const cabinetHead = new THREE.Mesh(cabinetHGeo, wood);
cabinetHead.position.set(-40,27,-24);
scene.add(cabinetHead);

const cabinetD1Geo = new THREE.BoxGeometry(7,15,20);
const cabinetDoor1 = new THREE.Mesh(cabinetD1Geo, wood);
cabinetDoor1.position.set(-36,18,-13);
scene.add(cabinetDoor1);

const cabinetD2Geo = new THREE.BoxGeometry(7,15,20);
const cabinetDoor2 = new THREE.Mesh(cabinetD2Geo, wood);
cabinetDoor2.position.set(-36,18,-35);
scene.add(cabinetDoor2);

const cabinetD3Geo = new THREE.BoxGeometry(7,5,42);
const cabinetDoor3 = new THREE.Mesh(cabinetD3Geo, wood);
cabinetDoor3.position.set(-36,6,-24);
scene.add(cabinetDoor3);

const cabinetKnob1Geo = new THREE.SphereGeometry(0.8,30);
const cabinetKnob1 = new THREE.Mesh(cabinetKnob1Geo, wood);
cabinetKnob1.position.set(-30,8,-23);
scene.add(cabinetKnob1);

const cabinetKnob2Geo = new THREE.SphereGeometry(0.8,30);
const cabinetKnob2 = new THREE.Mesh(cabinetKnob2Geo, wood);
cabinetKnob2.position.set(-30,17,-25);
scene.add(cabinetKnob2);

const cabinetKnob3Geo = new THREE.SphereGeometry(0.8,30);
const cabinetKnob3 = new THREE.Mesh(cabinetKnob3Geo, wood);
cabinetKnob3.position.set(-30,17,-20);
scene.add(cabinetKnob3);

// Door
const doorGeo = new THREE.BoxGeometry(2,40,15);
const door = new THREE.Mesh(doorGeo, wood);
door.position.set(-48.8,5,20);
scene.add(door);

const doorFGeo = new THREE.BoxGeometry(2,42,17);
const doorFrame = new THREE.Mesh(doorFGeo, doorFrameMat);
doorFrame.position.set(-49.5,5,20);
scene.add(doorFrame);

const doorKnobGeo = new THREE.SphereGeometry(0.8,30);
const doorKnob = new THREE.Mesh(doorKnobGeo, wood);
doorKnob.position.set(-33,22,33);
scene.add(doorKnob);



camera.position.set(100, 100, 100);
camera.lookAt(0,0,0);

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();