const buildings = {
    "Main-Building": {
        name: "Main Building",
        primaryRoute: "Use Stairwell A → East Courtyard → Main Assembly Point",
        rooms: [
            { name: "Library Room", floor: 1, image: "../images/Admin_Building/lib1.jpg", floorplan: "../images/floorplans/11.png" },
            { name: "Registrar Office", floor: 1, image: "../images/Admin_Building/registrar.jpg", floorplan: "../images/floorplans/regis.png" },
            { name: "HRMO", floor: 1, image: "../images/Admin_Building/hrmo.jpg", floorplan: "../images/floorplans/hrm.png" },
            { name: "RMO & Isolation & PSU & empty Room", floor: 1, image: "../images/Admin_Building/research.jpg", floorplan: "../images/floorplans/23.png" },
            { name: "Comfort-Room", floor: 1, image: "../images/Admin_Building/restroom.jpg", floorplan: "../images/floorplans/cr.png" },
            { name: "Hallway", floor: 1, image: "../images/Admin_Building/hallway1.jpg", floorplan: "../images/floorplans/hall.png" },
            { name: "MIS Room", floor: 2, image: "../images/Admin_Building/mis.jpg", floorplan: "../images/floorplans/12.png" },
            { name: "Hallway", floor: 2, image: "../images/Admin_Building/hallway2.jpg", floorplan: "../images/floorplans/21.png" },
            { name: "Library Room", floor: 2, image: "../images/Admin_Building/lib2.jpg", floorplan: "../images/floorplans/12.png" },
            { name: "Guidance Office", floor: 2, image: "../images/Admin_Building/guid2.jpg", floorplan: "../images/floorplans/131.png" },
            { name: "Records Management Room", floor: 2, image: "../images/Admin_Building/records.jpg", floorplan: "../images/floorplans/131.png" },
            { name: "Empty Room", floor: 2, image: "../images/Admin_Building/empty2.jpg", floorplan: "../images/floorplans/131.png" },
            { name: "Comfort-Room", floor: 2, image: "../images/Admin_Building/restroom2.jpg", floorplan: "../images/floorplans/acr.png" },
            { name: "Empty Room", floor: 3, image: "../images/Admin_Building/empty3.jpg", floorplan: "../images/floorplans/131.png" },
            { name: "Comfort Room", floor: 3, image: "../images/Admin_Building/restroom3.jpg", floorplan: "../images/floorplans/acr.png" },
            { name: "Hallway Room", floor: 3, image: "../images/Admin_Building/hallway3.jpg", floorplan: "../images/floorplans/22.png" },
            { name: "Audio Visual Room", floor: 3, image: "../images/Admin_Building/audio.jpg", floorplan: "../images/floorplans/12.png" },
            { name: "Civil Engineer Room", floor: 3, image: "../images/Admin_Building/ce.jpg", floorplan: "../images/floorplans/13.png" },
        ]
    },
    "MRM-Building": {
        name: "MRM Building",
        primaryRoute: "Use Stairwell B → North Exit → Assembly Point",
        rooms: [
            { name: "Faculty Office", floor: 1, image: "../images/MRM_Building/Faculty.jpg", floorplan: "../images/floorplans/faculty.png" },
            { name: "Medical & Dental Clinic Room", floor: 1, image: "../images/MRM_Building/clinic.jpg", floorplan: "../images/floorplans/clinic.png" },
            { name: "Driector's Office", floor: 1,  image: "../images/MRM_Building/director.jpg", floorplan: "../images/floorplans/director.png" },
            { name: "MRM 103", floor: 1, image: "../images/MRM_Building/mrm103.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "MRM 104", floor: 1, image: "../images/ARM_Building/arm102.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "MRM 105", floor: 1, image: "../images/MRM_Building/mrm105.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Comfort Room", floor: 1, image: "../images/ARM_Building/restroom.jpg", floorplan: "../images/floorplans/cr.png" },
            { name: "Lobby", floor: 1, image: "../images/ARM_Building/lobby.jpg", floorplan: "../images/floorplans/lob.png" },
            { name: "MRM 201", floor: 2, image: "../images/MRM_Building/mrm201.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "MRM 202", floor: 2, image: "../images/ARM_Building/arm202.jpg", floorplan: "../images/floorplans/single.png" },
            { name: "MRM 203", floor: 2, image: "../images/MRM_Building/mrm203.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "MRM 204", floor: 2, image: "../images/MRM_Building/mrm204.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "MRM 205", floor: 2, image: "../images/ARM_Building/arm202.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Computer Laboratory 1", floor: 2, image:"../images/MRM_Building/comlab1.jpg", floorplan: "../images/floorplans/lab.png" }
        ]
    },
    "ARM-Building": {
        name: "ARM Building",
        primaryRoute: "Use Stairwell C → South Exit → Assembly Point",
        rooms: [
            { name: "Civil Engineering Laboratory 1", floor: 1, image: "../images/ARM_Building/celab.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "ARM 102", floor: 1, image: "../images/ARM_Building/arm102.jpg", floorplan: "../images/floorplans/single.png" },
            { name: "Civil Engineering Lab 2", floor: 1, image: "../images/ARM_Building/celab2.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Storage Room", floor: 1, image: "../images/ARM_Building/storage.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Psychology Room", floor: 1, image: "../images/ARM_Building/biology.jpg", floorplan: "../images/floorplans/lob.png" },
            { name: "Lobby", floor: 1, image: "../images/ARM_Building/lobby.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Comfort Room", floor: 1, image: "../images/ARM_Building/restroom.jpg", floorplan: "../images/floorplans/cr.png" },
            { name: "CHTM Room", floor: 2, image: "../images/ARM_Building/chtm.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "ARM 203", floor: 2, image: "../images/ARM_Building/arm203.jpg", floorplan: "../images/floorplans/single.png" },
            { name: "ARM 204", floor: 2, image: "../images/ARM_Building/arm204.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "ARM 205", floor: 2, image: "../images/ARM_Building/arm205.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "ARM 206", floor: 2, image: "../images/ARM_Building/arm206.jpg", floorplan: "../images/floorplans/single.pngg" },
            { name: "Computer Laboratory 2", floor: 2, image: "../images/ARM_Building/comlab2.jpg", floorplan: "../images/floorplans/erm.png" }
        ]
    },
    
    "Cover-Court": {
        
        name: "Cover Court",
        primaryRoute: "Exit via main court doors to the West assembly area",
        image: "../images/psu-lubao.png",
        rooms: [
            { name: "Main Court", floor: 1, image: "../images/Covered_Court/court.jpg", floorplan: "../images/floorplans/cover.png" },
            { name: "Comfort-Room", floor: 1, image: "../images/Covered_Court/restroom.jpg", floorplan: "../images/floorplans/ccr.png" }
        ]

    },
    "ERM-Building": {
        name: "ERM Building",
        primaryRoute: "Use Stairwell D → East Exit → Assembly Point",
        rooms: [
            { name: "Comfort-Room", floor: 1, image: "../images/ERM_Building/Frestroom.jpg", floorplan: "../images/floorplans/restroom.svg" },
            { name: "Room 101", floor: 1, image: "../images/ERM_Building/erm101.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Room 102", floor: 1, image: "../images/ERM_Building/erm102.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Room 103", floor: 1, image: "../images/ERM_Building/erm101.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Hallway", floor: 1, image: "../images/ERM_Building/hallway1.jpg", floorplan: "../images/floorplans/hallway1.png" },
            { name: "Room 201", floor: 2, image: "../images/ERM_Building/erm201.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Room 202", floor: 2, image: "../images/ERM_Building/erm202.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Room 203", floor: 2, image: "../images/ERM_Building/erm203.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Room 204", floor: 2, image: "../images/ERM_Building/erm204.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Room 205", floor: 2, image: "../images/ERM_Building/erm205.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Hallway", floor: 2, image: "../images/ERM_Building/hallway2.jpg", floorplan: "../images/floorplans/15.png" },
            { name: "Room 301", floor: 3, image: "../images/ERM_Building/erm301.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Room 302", floor: 3, image: "../images/ERM_Building/erm302.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Room 303", floor: 3, image: "../images/ERM_Building/erm303.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Room 304", floor: 3, image: "../images/ERM_Building/erm301.jpg", floorplan: "../images/floorplans/erm.png" },
            { name: "Room 305", floor: 3, image: "../images/ERM_Building/erm303.jpg", floorplan: "../images/floorplans/erm.png" },
             { name: "Hallway", floor: 3, image: "../images/ERM_Building/hallway3.jpg", floorplan: "../images/floorplans/16.png" }
        ]
    },
    "Canteen": {
        name: "Canteen",
        primaryRoute: "Exit through cafeteria main doors to South assembly point",
        rooms: [
            { name: "Dining Hall", floor: 1, image: "../images/Canteen/canteen.jpg", floorplan: "../images/floorplans/can.png" },
            { name: "Empty Room", floor: 1, image: "../images/Canteen/storage.jpg", floorplan: "../images/floorplans/131.png" },
            { name: "Comfort-Room", floor: 1, image: "../images/Canteen/restroom.jpg", floorplan: "../images/floorplans/dcr.png" }
        ]
    }
};

const disasterGuides = {
    fire: {
        name: "🔥 Fire Emergency",
        steps: [
            "Stay calm and alert others nearby",
            "Activate the nearest fire alarm",
            "Evacuate immediately using the nearest safe exit",
            "Stay low to avoid smoke inhalation",
            "Feel doors before opening - if hot, use alternative route",
            "Proceed to the designated assembly point outside",
            "Do not re-enter the building until authorized"
        ]
    },
    earthquake: {
        name: "🏗️ Earthquake Emergency",
        steps: [
            "DROP to the ground immediately",
            "Take COVER under a sturdy desk or table",
            "HOLD ON until shaking stops",
            "Stay away from windows and heavy objects",
            "If outdoors, move to an open area away from buildings",
            "After shaking stops, evacuate the building calmly",
            "Watch for falling debris and aftershocks",
            "Gather at the designated assembly point"
        ]
    },
    hurricane: {
        name: "🌀 Hurricane/Typhoon Emergency",
        steps: [
            "Listen to emergency broadcasts and alerts",
            "Move to designated safe rooms or shelter areas",
            "Stay away from windows and exterior walls",
            "Avoid upper floors if possible",
            "Keep emergency supplies accessible",
            "Do not leave shelter until all-clear is given",
            "Be prepared for power outages",
            "Follow evacuation orders if issued"
        ]
    }
};


// Navigation links work directly through HTML href

// Building click handler
document.querySelectorAll('.building').forEach(building => {
    building.addEventListener('click', function() {
        const buildingId = this.dataset.building;
        showBuildingDetails(buildingId);
        
    });
});

function showBuildingDetails(buildingId) {
    const building = buildings[buildingId];
    const detailsDiv = document.getElementById('buildingDetails');
    
    let html = `
        <div class="building-detail active">
            <h2>${building.name}</h2>
            <p>Click on any room to view disaster evacuation guides:</p>
            <div class="room-grid">
    `;
    
    building.rooms.forEach((room, index) => {
        html += `
            <div class="room-card" onclick="selectRoom('${buildingId}', ${index})" tabindex="0" onkeydown="if(event.key==='Enter' || event.key===' ') { event.preventDefault(); selectRoom('${buildingId}', ${index}); }">
                <strong>${room.name}</strong><br>
                <small style="color: #999;">Floor ${room.floor}</small>
            </div>
        `;
    });
    
    html += `
            </div>
            <div id="roomImageContainer" class="room-image-container"></div>
            <div id="floorPlanContainer" class="floorplan-container" style="display:none;"></div>
            <div id="disasterGuideContainer"></div>
            <button class="back-btn" onclick="closeBuildingDetails()">← Back to Map</button>
        </div>
    `;
    
    detailsDiv.innerHTML = html;
    detailsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showDisasterGuide(buildingId, roomIndex) {
    const building = buildings[buildingId];
    const room = building.rooms[roomIndex];
    const container = document.getElementById('disasterGuideContainer');
    
    let html = `
        <div class="disaster-guide active">
            <h3>Emergency Evacuation Guides for ${room.name}</h3>
            <div class="disaster-tabs">
                <button class="disaster-tab active" onclick="showDisasterContent('fire')">Fire</button>
                <button class="disaster-tab" onclick="showDisasterContent('earthquake')">Earthquake</button>
                <button class="disaster-tab" onclick="showDisasterContent('hurricane')">Hurricane</button>
            </div>
    `;
    
    Object.keys(disasterGuides).forEach(type => {
        const guide = disasterGuides[type];
        html += `
            <div class="disaster-content ${type === 'fire' ? 'active' : ''}" id="${type}Content">
                <h4>${guide.name}</h4>
                <div class="exit-route">
                    <strong>📍 Primary Exit Route:</strong> PLACEHOLDER
                </div>
                <p><strong>Emergency Steps:</strong></p>
                <ol>
        `;
        
        guide.steps.forEach(step => {
            html += `<li>${step}</li>`;
        });
        
        html += `
                </ol>
            </div>
        `;
        
        // populate exit-route with room-specific or building-specific primary route
        try{
            const primaryRouteText = (room && room.primaryRoute) ? room.primaryRoute : (building.primaryRoute ? building.primaryRoute : (`Use nearest stairwell and exit to the designated assembly point (Floor ${room.floor})`));
            // defer until the container is inserted in DOM
            setTimeout(()=>{
                try{
                    const contentEl = document.getElementById(type + 'Content');
                    if(contentEl){
                        const routeContainer = contentEl.querySelector('.exit-route');
                        if(routeContainer) routeContainer.innerHTML = `<strong>📍 Primary Exit Route:</strong> ${primaryRouteText}`;
                    }
                }catch(e){}
            },0);
        }catch(e){}
    });
    
    html += `</div>`;
    container.innerHTML = html;
}

function showDisasterContent(type) {
    document.querySelectorAll('.disaster-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.disaster-content').forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(type + 'Content').classList.add('active');
}

function closeBuildingDetails() {
    document.getElementById('buildingDetails').innerHTML = '';
}

// Select a room: show its image (if available) then show the disaster guide
function selectRoom(buildingId, roomIndex) {
    showRoomImage(buildingId, roomIndex);
    showDisasterGuide(buildingId, roomIndex);
}

function showRoomImage(buildingId, roomIndex) {
    const building = buildings[buildingId];
    if (!building) return;
    const room = building.rooms[roomIndex];
    const container = document.getElementById('roomImageContainer');
    if (!container) return;

    // prefer room image, then building image, otherwise clear
    const imgSrc = (room && room.image) ? room.image : (building.image ? building.image : null);
    if (!imgSrc) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = `
        <div class="room-image-wrapper">
            <div class="room-panorama" id="roomPanorama" role="application" aria-label="Panorama view" style="background-image: url('${imgSrc}')"></div>
            <div class="room-image-caption">${room ? room.name : building.name} <small style="color:#666; font-weight:400; display:block;">Drag to look around — double-click to fullscreen</small></div>
            <div class="room-controls" style="margin-top:0.8rem; display:flex; gap:0.5rem; justify-content:center;">
                <button class="explore-btn" onclick="showFloorPlanInline('${buildingId}', ${roomIndex})">Show Evacuation Floor Plan</button>
            </div>
        </div>
    `;

    // hide any visible floor plan when viewing the panorama
    const fp = document.getElementById('floorPlanContainer');
    if(fp){ fp.style.display = 'none'; fp.innerHTML = ''; }

    // initialize interactive panorama behavior
    const panoEl = container.querySelector('.room-panorama');
    if (panoEl) initPanorama(panoEl);
}

// Simple panorama initializer: drag/touch to pan horizontally with momentum and fullscreen on double-click
function initPanorama(el){
    // cleanup existing instance if present
    if(el.__panoramaCleanup){ el.__panoramaCleanup(); }

    // ensure styling expectations (defaults - caller may override)
    el.style.backgroundPosition = '0px 50%';
    el.style.cursor = 'grab';

    let isDown = false;
    let lastX = 0;
    let pos = 0; // background-position-x in px
    let velocity = 0;
    let raf = null;
    let autoRaf = null;
    let autoActive = false;
    let autoStartTimer = null;
    const AUTO_START_DELAY = 0; // start immediately
    const AUTO_SPEED = 0.03; // px per ms
    let activePointerId = null;

    function onPointerDown(e){
        // only left mouse button
        if(e.pointerType === 'mouse' && e.button !== 0) return;
        isDown = true;
        lastX = e.clientX;
        velocity = 0;
        el.style.cursor = 'grabbing';
        // capture pointer to receive move/up events on this element
        try{ el.setPointerCapture(e.pointerId); activePointerId = e.pointerId; }catch(_){}
        // stop any ongoing momentum
        if(raf) cancelAnimationFrame(raf);
        stopAutoRotate();
    }

    function onPointerMove(e){
        if(!isDown) return;
        // ignore if not the active pointer
        if(activePointerId !== null && e.pointerId !== activePointerId) return;
        const x = e.clientX;
        const dx = x - lastX;
        lastX = x;
        pos += dx;
        velocity = dx;
        el.style.backgroundPosition = pos + 'px 50%';
    }

    function onPointerUp(e){
        if(!isDown) return;
        // ignore if not the active pointer
        if(activePointerId !== null && e.pointerId !== activePointerId) return;
        isDown = false;2
        el.style.cursor = 'grab';
        try{ if(activePointerId !== null) el.releasePointerCapture(activePointerId); } catch(_){}
        activePointerId = null;
        // apply momentum with decay
        function momentum(){
            velocity *= 0.95;
            pos += velocity;
            el.style.backgroundPosition = pos + 'px 50%';
            if(Math.abs(velocity) > 0.5){
                raf = requestAnimationFrame(momentum);
            } else {
                raf = null;
            }
        }
        if(raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(momentum);
        // schedule auto-rotate after inactivity
        scheduleAutoRotate();
    }

    function onWheel(e){
        // optional: zoom in/out by changing background-size
        e.preventDefault();
        const current = el.dataset._pz ? parseFloat(el.dataset._pz) : 100;
        let next = current - Math.sign(e.deltaY) * 10;
        next = Math.min(200, Math.max(60, next));
        el.style.backgroundSize = 'auto ' + next + '%';
        el.dataset._pz = next;
    }

    function onDblClick(){
        // toggle fullscreen on the panorama element
        if(!document.fullscreenElement){
            if(el.requestFullscreen) el.requestFullscreen();
            else if(el.webkitRequestFullscreen) el.webkitRequestFullscreen();
        } else {
            if(document.exitFullscreen) document.exitFullscreen();
            else if(document.webkitExitFullscreen) document.webkitExitFullscreen();
        }
    }

    function startAutoRotate(){
        if(autoActive) return;  
        autoActive = true;
        let lastTime = performance.now();
        function step(t){
            const dt = t - lastTime;
            lastTime = t;
            // advance position slowly
            pos += AUTO_SPEED * dt;
            el.style.backgroundPosition = pos + 'px 50%';
            autoRaf = requestAnimationFrame(step);
        }
        autoRaf = requestAnimationFrame(step);
    }

    function stopAutoRotate(){
        autoActive = false;
        if(autoRaf) cancelAnimationFrame(autoRaf);
        autoRaf = null;
        if(autoStartTimer){ clearTimeout(autoStartTimer); autoStartTimer = null; }
    }

    function scheduleAutoRotate(){
        if(autoStartTimer) clearTimeout(autoStartTimer);
        autoStartTimer = setTimeout(()=>{
            startAutoRotate();
            autoStartTimer = null;
        }, AUTO_START_DELAY);
    }

    // Pointer events (use pointer events only to avoid duplication)
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);
    el.addEventListener('wheel', onWheel, {passive:false});
    el.addEventListener('dblclick', onDblClick);
    el.addEventListener('mouseenter', stopAutoRotate);
    el.addEventListener('mouseleave', scheduleAutoRotate);

    // expose cleanup
    el.__panoramaCleanup = function(){
        el.removeEventListener('pointerdown', onPointerDown);
        el.removeEventListener('pointermove', onPointerMove);
        el.removeEventListener('pointerup', onPointerUp);
        el.removeEventListener('pointercancel', onPointerUp);
        el.removeEventListener('wheel', onWheel);
        el.removeEventListener('dblclick', onDblClick);
        el.removeEventListener('mouseenter', stopAutoRotate);
        el.removeEventListener('mouseleave', scheduleAutoRotate);
        if(raf) cancelAnimationFrame(raf);
        if(autoRaf) cancelAnimationFrame(autoRaf);
        if(autoStartTimer) clearTimeout(autoStartTimer);
        el.__panoramaCleanup = null;
    };

    // start auto-rotation
    scheduleAutoRotate();
}

// Show a floor plan image (if available) for a given building room.
function showFloorPlan(buildingId, roomIndex){
    const building = buildings[buildingId];
    if(!building) return;
    const room = building.rooms[roomIndex];
    const container = document.getElementById('floorPlanContainer');
    if(!container) return;

    // determine floor plan source: explicit room.floorplan -> building.floorplan -> convention-based path -> sample placeholder
    let planSrc = (room && room.floorplan) ? room.floorplan : (building.floorplan ? building.floorplan : (`../images/floorplans/${buildingId.replace(/\s+/g,'_')}_room${roomIndex+1}.jpg`));
    
    // if no specific floor plan found, use sample placeholder
    if(!planSrc || planSrc.includes('undefined')){
        planSrc = '../images/floorplans/sample_floorplan.svg';
    }

    container.innerHTML = `
        <div class="room-image-wrapper">
            <img class="floorplan-img" src="${planSrc}" alt="Floor plan for ${room.name}" />
            <div class="room-image-caption">${room.name} — Floor Plan <small style="color:#666; font-weight:400; display:block;">Use this guide to locate exit routes.</small></div>
            <div style="text-align:center; margin-top:0.8rem;"><button class="back-btn" onclick="closeFloorPlan()">Close Floor Plan</button></div>
        </div>
    `;
    container.style.display = 'flex';
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeFloorPlan(){
    const container = document.getElementById('floorPlanContainer');
    if(!container) return;
    container.style.display = 'none';
    container.innerHTML = '';
}

// Replace the inline panorama with a floor plan image (cleanly removes panorama handlers)
function showFloorPlanInline(buildingId, roomIndex){
    const building = buildings[buildingId];
    if(!building) return;
    const room = building.rooms[roomIndex];
    const container = document.getElementById('roomImageContainer');
    if(!container) return;

    const panoEl = container.querySelector('.room-panorama');

    // determine floor plan source (explicit -> building -> convention -> sample placeholder)
    let planSrc = (room && room.floorplan) ? room.floorplan : (building.floorplan ? building.floorplan : (`../images/floorplans/${buildingId.replace(/\s+/g,'_')}_room${roomIndex+1}.jpg`));
    
    // if no specific floor plan found, use sample placeholder
    if(!planSrc || planSrc.includes('undefined')){
        planSrc = '../images/floorplans/sample_floorplan.svg';
    }

    // cleanup panorama if present
    try{ if(panoEl && panoEl.__panoramaCleanup) panoEl.__panoramaCleanup(); } catch(e){}

    // replace panorama element with an image element
    const img = document.createElement('img');
    img.className = 'floorplan-img inline-floorplan';
    img.src = planSrc;
    img.alt = `Floor plan for ${room ? room.name : building.name}`;

    if(panoEl && panoEl.parentNode){
        panoEl.parentNode.replaceChild(img, panoEl);
    }

    // swap control button to allow going back to 360
    const controls = container.querySelector('.room-controls');
    if(controls){
        controls.innerHTML = `<button class="explore-btn" onclick="backTo360('${buildingId}', ${roomIndex})">Back to Room</button>`;
    }
}

// Restore the panorama view for the given room (re-renders the panorama)
function backTo360(buildingId, roomIndex){
    // simply re-render the room image which reinstates the panorama and controls
    showRoomImage(buildingId, roomIndex);
}

/* -----------------------------
   Bento card modal and accessibility
   ----------------------------- */

const bentoDetails = {
    heatwaves: {
        title: 'Heatwaves — What to know',
        image: '../images/one_pager/heatwaves.png',
        content: `<p>Heatwaves are prolonged periods of excessively hot weather which may be accompanied by high humidity. They increase the risk of heat-related illness, especially for older adults, children and people with chronic illnesses.</p>
        <h4>Simple actions</h4>
        <ul>
            <li>Stay hydrated and avoid strenuous activity during peak heat.</li>
            <li>Move to air-conditioned areas when possible.</li>
            <li>Check on neighbors and vulnerable people.</li>
        </ul>`
    },
    floods: {
        title: 'Floods — Be prepared',
        image: '../images/one_pager/floods.png',
        content: `<p>Floods can happen quickly during heavy rains or storms. Know the local flood risk and nearest high ground.</p>
        <h4>Before & During</h4>
        <ul>
            <li>Learn evacuation routes and shelter locations.</li>
            <li>Move valuables to higher shelves and unplug electronics if safe.</li>
            <li>Do not walk or drive through floodwaters.</li>
        </ul>`
    },
    droughts: {
        title: 'Droughts — Water conservation',
        image: '../images/one_pager/drought.png',
        content: `<p>Droughts reduce water availability and affect crops and ecosystems.</p>
        <h4>Actions</h4>
        <ul>
            <li>Report leaks and fix them quickly.</li>
            <li>Practice water-wise gardening and shorter showers.</li>
            <li>Use refillable containers and reduce unnecessary water use.</li>
        </ul>`
    },
    'sea-level': {
        title: 'Sea Level Rise',
        image: '../images/one_pager/sea.png',
        content: `<p>Sea level rise threatens coastal communities. Be aware of long-term risks and local adaptation plans.</p>`
    },
    mitigation: {
        title: 'Mitigation — Reduce emissions',
        image: '../images/admin.png',
        content: `<p>Mitigation reduces greenhouse gas emissions. Actions on campus include energy efficiency and waste reduction.</p>`
    },
    adaptation: {
        title: 'Adaptation — Building resilience',
        image: '../images/mrm.png',
        content: `<p>Adaptation involves adjusting systems and behavior to reduce harm from climate impacts.</p>`
    },
    warning: {
        title: 'Early Warning Systems',
        image: '../images/erm.png',
        content: `<p>Sign up for alerts and learn what each siren or alarm means. Early warnings give time to act.</p>`
    },
    community: {
        title: 'Community Preparedness',
        image: '../images/gym1.png',
        content: `<p>Prepared communities are safer. Join drills, know shelter locations, and keep emergency kits ready.</p>`
    }
};

function createModal() {
    // avoid creating multiple times
    if(document.getElementById('bentoModalBackdrop')) return;
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.id = 'bentoModalBackdrop';
    backdrop.innerHTML = `
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
            <div class="modal-header">
                <h3 id="modalTitle">Title</h3>
                <div>
                    <button class="modal-close" aria-label="Close modal">✕</button>
                </div>
            </div>
            <div class="modal-body" id="modalBody"></div>
            <div class="modal-footer">
                <button class="modal-close" aria-label="Close">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(backdrop);

    // events
    backdrop.addEventListener('click', (e)=>{
        if(e.target === backdrop) closeModal();
    });
    backdrop.querySelectorAll('.modal-close').forEach(btn=> btn.addEventListener('click', closeModal));
}

let lastFocusedElement = null;
function openModal(key){
    const data = bentoDetails[key];
    if(!data) return;
    createModal();
    const backdrop = document.getElementById('bentoModalBackdrop');
    const titleEl = backdrop.querySelector('#modalTitle');
    const bodyEl = backdrop.querySelector('#modalBody');
    titleEl.textContent = data.title;
    bodyEl.innerHTML = `<div style="border-radius:8px; overflow:hidden; margin-bottom:0.8rem;"><div style="height:200px; background-image:url('${data.image}'); background-size:cover; background-position:center;"></div></div>` + data.content;
    // show
    backdrop.classList.add('open');

    // focus management
    lastFocusedElement = document.activeElement;
    const focusable = backdrop.querySelectorAll('button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0] || backdrop.querySelector('.modal-close');
    if(first) first.focus();

    // trap focus
    backdrop.addEventListener('keydown', trapFocus);
    document.addEventListener('keydown', onDocKeyDown);
}

// update modal footer to include a link to a printable one-pager
function setModalFooterOnePager(key){
    // keep footer minimal (Close only) as requested
    const backdrop = document.getElementById('bentoModalBackdrop');
    if(!backdrop) return;
    const footer = backdrop.querySelector('.modal-footer');
    if(!footer) return;
    footer.innerHTML = `
        <button class="modal-close" aria-label="Close">Close</button>
    `;
    // reattach close handlers
    footer.querySelectorAll('.modal-close').forEach(btn=> btn.addEventListener('click', closeModal));
}

function closeModal(){
    const backdrop = document.getElementById('bentoModalBackdrop');
    if(!backdrop) return;
    backdrop.classList.remove('open');
    setTimeout(()=>{
        // remove element after animation
        if(backdrop && backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
    }, 240);
    document.removeEventListener('keydown', onDocKeyDown);
    if(lastFocusedElement) {
        try{ lastFocusedElement.focus(); } catch(e){}
        lastFocusedElement = null;
    }
}

function trapFocus(e){
    if(e.key !== 'Tab') return;
    const backdrop = document.getElementById('bentoModalBackdrop');
    if(!backdrop) return;
    const focusable = Array.from(backdrop.querySelectorAll('a[href], button, input, textarea, [tabindex]:not([tabindex="-1"])')).filter(el=> !el.hasAttribute('disabled'));
    if(focusable.length === 0) { e.preventDefault(); return; }
    const first = focusable[0];
    const last = focusable[focusable.length -1];
    if(e.shiftKey){ if(document.activeElement === first){ last.focus(); e.preventDefault(); } }
    else { if(document.activeElement === last){ first.focus(); e.preventDefault(); } }
}

function onDocKeyDown(e){
    if(e.key === 'Escape') closeModal();
}

function initBentoModals(){
    // attach events to bento cards
    document.querySelectorAll('.bento-card').forEach(card=>{
        // prefer explicit data-key attribute; fallback to aria-label->slug
        const dataKey = card.dataset.key || (card.getAttribute('aria-label') || '').toLowerCase().replace(/\s+/g,'-');
        card.setAttribute('tabindex', '0');
        card.addEventListener('click', ()=> openModal(dataKey));
        card.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(dataKey); } });
    });
}

// initialize on DOM ready
document.addEventListener('DOMContentLoaded', ()=>{
    initBentoModals();
});
