---
title: "Simulator Robot: A Ground-Truth Object Simulator and data collector (Kinematics/Trajectory) for computer vision analysis validation & calibration"
date: 2026-06-03
permalink: /posts/2026/06/poultry-house-rover-apriltag-navigation/
tags:
  - poultry
  - robotics
  - computer vision
  - apriltag
  - camera calibration
  - animal tracking
skills:
  - Software
  - Device
  - Computer Vision
  - Animal Data
  - Multi-Sensor
post_icon: /images/rover.png
post_icon_width: 30
social_image: /images/poultry-rover-camera-gimbal-front.jpeg
excerpt: "A small AprilTag-guided ground rover that stands in for a chicken inside a broiler house pen, giving inch-level ground-truth movement data to calibrate pen cameras and validate chicken-tracking pipelines."
---
You can't ask a animals to walk a known path at a known speed so that a tracking camera can be checked against it. A **rover can**. I built the **Simulator Rover Robot** as a controllable stand-in for animal inside a farm house: it drives itself around the floor using printed AprilTag landmarks bolted to the walls, and because it always knows its own position in real-world inches, every trip it makes is a ground-truth trajectory. That trajectory is exactly what's needed to calibrate pen cameras and standardize how a computer-vision pipeline tracks objects' movements in the same space.

<video controls muted loop playsinline style="display:block; width:100%; max-width:920px; height:auto; margin:1rem auto; border-radius:12px;">
  <source src="/videos/poultry-rover-dashboard.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

The video above walks through the laptop dashboard that pairs with the rover — driving it live, watching telemetry stream in, and replaying a logged trip for offline data analysis.

## Why simulate a chicken with a rover

Camera-based animal tracking in a farm house has no reliable ground truth to check itself against — you can't put a ruler on a moving animal, and hand-labeling video is slow and still just an estimate. The rover solves that by being an animal that reports its own exact position:

- It bolts a handful of `tag36h11` AprilTags to walls/posts at known `(x, y)` coordinates — a simple `tags.json` map of the pen.
- Its onboard camera detects tags every frame and computes distance and bearing to each one, fused with wheel odometry so it always knows where it is, even between tag sightings.
- Every run produces a logged path in real-world inches, independent of whatever the overhead/wall cameras think they're seeing.

Drive the rover through the same pen the tracking cameras are watching, and you get two records of the same physical path: the rover's own tag-based localization (ground truth) and the camera pipeline's tracked estimate. Comparing the two is how pen cameras get calibrated and how an animal-tracking algorithm gets validated and standardized before it's trusted on live animals.

The sample floor plan baked into the dashboard is sized for a broiler house (484 in × 258 in) with 16 wall-mounted landmark tags and drinker/feeder lines overlaid — the same genetics context behind the broiler work I'm doing in the [ISP Lab]({{ site.baseurl }}/posts/2026/01/research-assistantship-guoming-li/).

## Building the rover

The chassis is a small tracked platform with a Raspberry Pi and a pan/tilt camera gimbal on top, powered off a jump-starter battery pack for untethered runs in the field. A printed AprilTag is mounted flat on the lid so the rover itself can be sighted and tracked by an external overhead camera, in addition to the tags it reads off the walls.

**Chassis and compute.** A tracked platform with the Raspberry Pi mounted directly to the frame — the brain for tag detection, gimbal tracking, and drive-to-tag navigation.

<div style="display:flex; gap:1rem; align-items:stretch; justify-content:center; flex-wrap:wrap; margin:1.25rem 0;">
  <img src="/images/poultry-rover-prototype-scale-test.jpeg" alt="Early rover prototype on the floor, testing scale and drive" style="display:block; width:31%; min-width:200px; height:auto; object-fit:cover; border-radius:16px; border:1px solid rgba(20,40,60,0.12); box-shadow:0 14px 32px rgba(15,23,42,0.14); background:#fff; padding:0.35rem;" />
  <img src="/images/poultry-rover-raspberry-pi-mount-front.jpeg" alt="Raspberry Pi mounted inside the rover chassis, front angle" style="display:block; width:31%; min-width:200px; height:auto; object-fit:cover; border-radius:16px; border:1px solid rgba(20,40,60,0.12); box-shadow:0 14px 32px rgba(15,23,42,0.14); background:#fff; padding:0.35rem;" />
  <img src="/images/poultry-rover-raspberry-pi-mount-rear.jpeg" alt="Raspberry Pi mounted inside the rover chassis, rear angle" style="display:block; width:31%; min-width:200px; height:auto; object-fit:cover; border-radius:16px; border:1px solid rgba(20,40,60,0.12); box-shadow:0 14px 32px rgba(15,23,42,0.14); background:#fff; padding:0.35rem;" />
</div>

**Power and gimbal.** Untethered runs matter for field data collection, so the rig runs off a 12V jump-starter pack instead of a tether, with the pan/tilt camera gimbal wired alongside it and a wireless controller for manual teleop.

<div style="display:flex; gap:1rem; align-items:stretch; justify-content:center; flex-wrap:wrap; margin:1.25rem 0;">
  <img src="/images/poultry-rover-battery-gimbal-mount.jpeg" alt="Jump-starter battery pack mounted next to the camera gimbal for untethered field power" style="display:block; width:31%; min-width:200px; height:auto; object-fit:cover; border-radius:16px; border:1px solid rgba(20,40,60,0.12); box-shadow:0 14px 32px rgba(15,23,42,0.14); background:#fff; padding:0.35rem;" />
  <img src="/images/poultry-rover-battery-closeup.jpeg" alt="Close-up of the 12V jump-starter battery pack powering the rover" style="display:block; width:31%; min-width:200px; height:auto; object-fit:cover; border-radius:16px; border:1px solid rgba(20,40,60,0.12); box-shadow:0 14px 32px rgba(15,23,42,0.14); background:#fff; padding:0.35rem;" />
  <img src="/images/poultry-rover-gimbal-controller-closeup.jpeg" alt="Close-up of the camera gimbal next to the wireless controller used for manual teleop" style="display:block; width:31%; min-width:200px; height:auto; object-fit:cover; border-radius:16px; border:1px solid rgba(20,40,60,0.12); box-shadow:0 14px 32px rgba(15,23,42,0.14); background:#fff; padding:0.35rem;" />
</div>

**AprilTag lid and finished unit.** A printed AprilTag sits flat on the lid so an external overhead camera can sight and track the rover itself, on top of the tags the rover reads off the walls.

<div style="display:flex; gap:1rem; align-items:stretch; justify-content:center; flex-wrap:wrap; margin:1.25rem 0;">
  <img src="/images/poultry-rover-apriltag-lid-rear.jpeg" alt="Rear view of the rover with the top-mounted AprilTag lid" style="display:block; width:23%; min-width:150px; height:auto; object-fit:cover; border-radius:16px; border:1px solid rgba(20,40,60,0.12); box-shadow:0 14px 32px rgba(15,23,42,0.14); background:#fff; padding:0.35rem;" />
  <img src="/images/poultry-rover-camera-gimbal-front.jpeg" alt="Front view of the rover with the pan/tilt camera gimbal and top-mounted AprilTag" style="display:block; width:23%; min-width:150px; height:auto; object-fit:cover; border-radius:16px; border:1px solid rgba(20,40,60,0.12); box-shadow:0 14px 32px rgba(15,23,42,0.14); background:#fff; padding:0.35rem;" />
  <img src="/images/poultry-rover-side-view.jpeg" alt="Side view of the finished rover unit on a stainless table" style="display:block; width:23%; min-width:150px; height:auto; object-fit:cover; border-radius:16px; border:1px solid rgba(20,40,60,0.12); box-shadow:0 14px 32px rgba(15,23,42,0.14); background:#fff; padding:0.35rem;" />
  <img src="/images/poultry-rover-finished-unit.jpeg" alt="Finished rover unit, ready for a test run" style="display:block; width:23%; min-width:150px; height:auto; object-fit:cover; border-radius:16px; border:1px solid rgba(20,40,60,0.12); box-shadow:0 14px 32px rgba(15,23,42,0.14); background:#fff; padding:0.35rem;" />
</div>

Control is a Flask laptop app talking to a Waveshare-style JSON API on the rover and proxying to a set of Raspberry Pi services — tag detection, gimbal tracking, drive-to-tag navigation, and a follow-me mode — so the laptop never needs to reach the motor controller directly. Driving is either manual (on-screen buttons, keyboard, or an Xbox controller) or autonomous drive-to-tag, arcing to keep the target tag centered and ramping down speed on approach.

## The laptop dashboard: calibration and data analysis

This is the part shown in the video above. The dashboard isn't just a remote control — it's where a run gets turned into usable calibration data. It polls the rover for live telemetry while driving, then rolls a full run into a trip report: distance traveled, average and peak speed, total turn, and elapsed time, alongside seven synced kinematics charts.

<img src="/images/poultry-rover-kinematics-graphs.jpg" alt="Dashboard kinematics graphs: linear and angular velocity, linear acceleration, IMU acceleration, heading, voltage, moment speed, and cumulative distance" style="display:block; width:100%; max-width:920px; height:auto; margin:1.25rem auto; border-radius:12px; border:1px solid rgba(20,40,60,0.12); box-shadow:0 14px 32px rgba(15,23,42,0.14);" />

The most useful output for calibration work is the dwell-time heatmap: the logged path is resampled and accumulated onto the pen floor plan, smoothed, and rendered on a blue-to-red scale so the spots where the rover lingered — corners, turnarounds, feeder/drinker lines — pop out visually against the tag landmarks.

<img src="/images/poultry-rover-dwell-heatmap.jpg" alt="Dwell-time heatmap of a logged run over the pen floor plan, with numbered AprilTag landmarks around the perimeter" style="display:block; width:100%; max-width:920px; height:auto; margin:1.25rem auto; border-radius:12px; border:1px solid rgba(20,40,60,0.12); box-shadow:0 14px 32px rgba(15,23,42,0.14);" />

Because a `tag_nav.py` log can be pasted or loaded after the fact, none of this requires a live connection — a run recorded on the rover out in the pen gets analyzed later on any laptop. That's what makes it practical as a calibration tool: record a rover pass with known ground-truth positions, then run the pen's animal-tracking pipeline over the same footage and line the two trajectories up to check where the tracking drifts, where camera coverage has blind spots, and whether tracked speed/heading numbers hold up against the rover's own IMU and odometry.

## Why this matters for animal tracking

A tracking pipeline that's only ever been checked against itself can look accurate and still be wrong in ways that only show up against real geometry. Driving a known object on a known path through the same cameras used to watch live animals turns "does the tracker look right" into "does the tracker agree with ground truth, in inches, frame by frame" — which is what standardizing a animal-tracking behavior pipeline across pens and camera setups actually requires.
