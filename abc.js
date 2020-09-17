/******************************* 
 * Pilotemotionconflictv2 Test *
 *******************************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'pilotEmotionConflictV2';  // from the Builder filename that created this script
let expInfo = {'participant': 'PEC_01', 'CB_order': '1'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const init_conditionsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(init_conditionsLoopBegin, init_conditionsLoopScheduler);
flowScheduler.add(init_conditionsLoopScheduler);
flowScheduler.add(init_conditionsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var screen_scaleClock;
var event;
var thisExp;
var win;
var round;
var oldt;
var x_size;
var y_size;
var screen_height;
var x_scale;
var y_scale;
var dbase;
var unittext;
var vsize;
var text_top;
var text_bottom;
var ccimage;
var inst1Clock;
var inst_1;
var inst1_keyResp;
var inst2Clock;
var inst_2;
var inst2_keyResp;
var inst3Clock;
var inst_3;
var inst3_keyResp;
var pract_strtClock;
var pract_txt;
var pract_resp;
var pract_instClock;
var practinst_txt;
var practinst_resp;
var pract_itiClock;
var pract_blank;
var pract_trialsClock;
var pr_fix_cross;
var pr_face_emo;
var pr_face_label;
var pr_emo_resp;
var feedbackClock;
var text_3;
var loopBreakClock;
var Repeat_Training_MessageClock;
var ifrepeat;
var ifrepeat_resp;
var run1_strtClock;
var run1_txt;
var run1_keyresp;
var mainInstClock;
var mainInst_txt;
var mainkeyResp;
var InstClock;
var inst_txt;
var inst_resp;
var itiClock;
var iti_blank;
var trialsClock;
var fix_cross1;
var face_emo;
var face_label;
var emo_resp;
var run2_strtClock;
var run2_txt;
var run2_keyresp;
var run3_strtClock;
var run3_txt;
var run3_keyresp;
var run4_strtClock;
var run4_txt;
var run4_keyresp;
var EndClock;
var endblank;
var key_resp_2;
var text_2;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "screen_scale"
  screen_scaleClock = new util.Clock();
  event=psychoJS.eventManager;
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  
  round = function (a) {
      return Math.round(a);
  }
  
  
  oldt = 0;
  x_size = 8.56;
  y_size = 5.398;
  screen_height = 0;
  if ((win.units === "norm")) {
      x_scale = 0.05;
      y_scale = 0.1;
      dbase = 0.0001;
      unittext = " norm units";
      vsize = 2;
  } else {
      if ((win.units === "pix")) {
          x_scale = 60;
          y_scale = 40;
          dbase = 0.1;
          unittext = " pixels";
          vsize = win.size[1];
      } else {
          x_scale = 0.05;
          y_scale = 0.05;
          dbase = 0.0001;
          unittext = " height units";
          vsize = 1;
      }
  }
  
  text_top = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_top',
    text: 'Resize this image to match the size of a credit card\nUp arrow for taller\nDown arrow for shorter\nLeft arrow for narrower\nRight arrow for wider',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.7], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_bottom = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_bottom',
    text: 'Press the space bar when done',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.6)], height: 0.04,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  ccimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ccimage', units : undefined, 
    image : 'Stim/bank_card_inverted.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [(x_size * x_scale), (y_size * y_scale)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "inst1"
  inst1Clock = new util.Clock();
  inst_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst_1', units : 'height', 
    image : 'Stim/inst1.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.777, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  inst1_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "inst2"
  inst2Clock = new util.Clock();
  inst_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst_2', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1.777, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  inst2_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "inst3"
  inst3Clock = new util.Clock();
  inst_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : undefined, size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  inst3_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pract_strt"
  pract_strtClock = new util.Clock();
  pract_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'pract_txt',
    text: 'default text',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  pract_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pract_inst"
  pract_instClock = new util.Clock();
  practinst_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'practinst_txt',
    text: 'default text',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  practinst_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pract_iti"
  pract_itiClock = new util.Clock();
  pract_blank = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pract_blank', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "pract_trials"
  pract_trialsClock = new util.Clock();
  document.body.style.cursor = "none";
  pr_fix_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'pr_fix_cross',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  pr_face_emo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pr_face_emo', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  pr_face_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'pr_face_label',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -3.0 
  });
  
  pr_emo_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'default text',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "loopBreak"
  loopBreakClock = new util.Clock();
  // Initialize components for Routine "Repeat_Training_Message"
  Repeat_Training_MessageClock = new util.Clock();
  ifrepeat = new visual.TextStim({
    win: psychoJS.window,
    name: 'ifrepeat',
    text: 'default text',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  ifrepeat_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "run1_strt"
  run1_strtClock = new util.Clock();
  run1_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'run1_txt',
    text: 'default text',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  run1_keyresp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "mainInst"
  mainInstClock = new util.Clock();
  mainInst_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'mainInst_txt',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  mainkeyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Inst"
  InstClock = new util.Clock();
  inst_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'inst_txt',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  inst_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "iti"
  itiClock = new util.Clock();
  iti_blank = new visual.ImageStim({
    win : psychoJS.window,
    name : 'iti_blank', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "trials"
  trialsClock = new util.Clock();
  document.body.style.cursor = "none";
  fix_cross1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cross1',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  face_emo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'face_emo', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  face_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'face_label',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -3.0 
  });
  
  emo_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "run2_strt"
  run2_strtClock = new util.Clock();
  run2_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'run2_txt',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  run2_keyresp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Inst"
  InstClock = new util.Clock();
  inst_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'inst_txt',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  inst_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "iti"
  itiClock = new util.Clock();
  iti_blank = new visual.ImageStim({
    win : psychoJS.window,
    name : 'iti_blank', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "trials"
  trialsClock = new util.Clock();
  document.body.style.cursor = "none";
  fix_cross1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cross1',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  face_emo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'face_emo', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  face_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'face_label',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -3.0 
  });
  
  emo_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "run3_strt"
  run3_strtClock = new util.Clock();
  run3_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'run3_txt',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  run3_keyresp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Inst"
  InstClock = new util.Clock();
  inst_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'inst_txt',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  inst_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "iti"
  itiClock = new util.Clock();
  iti_blank = new visual.ImageStim({
    win : psychoJS.window,
    name : 'iti_blank', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "trials"
  trialsClock = new util.Clock();
  document.body.style.cursor = "none";
  fix_cross1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cross1',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  face_emo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'face_emo', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  face_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'face_label',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -3.0 
  });
  
  emo_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "run4_strt"
  run4_strtClock = new util.Clock();
  run4_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'run4_txt',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  run4_keyresp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Inst"
  InstClock = new util.Clock();
  inst_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'inst_txt',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  inst_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "iti"
  itiClock = new util.Clock();
  iti_blank = new visual.ImageStim({
    win : psychoJS.window,
    name : 'iti_blank', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "trials"
  trialsClock = new util.Clock();
  document.body.style.cursor = "none";
  fix_cross1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cross1',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  face_emo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'face_emo', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  face_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'face_label',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -3.0 
  });
  
  emo_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  endblank = new visual.ImageStim({
    win : psychoJS.window,
    name : 'endblank', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'The experiment has ended. \n\nThanks for your participation.\n\n\n\nPress SPACE bar to quit the experiment.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var init_conditions;
var currentLoop;
function init_conditionsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  init_conditions = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: (('CB_order' + expInfo['CB_order']) + '.csv'),
    seed: undefined, name: 'init_conditions'
  });
  psychoJS.experiment.addLoop(init_conditions); // add the loop to the experiment
  currentLoop = init_conditions;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisInit_condition of init_conditions) {
    const snapshot = init_conditions.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(screen_scaleRoutineBegin(snapshot));
    thisScheduler.add(screen_scaleRoutineEachFrame(snapshot));
    thisScheduler.add(screen_scaleRoutineEnd(snapshot));
    thisScheduler.add(inst1RoutineBegin(snapshot));
    thisScheduler.add(inst1RoutineEachFrame(snapshot));
    thisScheduler.add(inst1RoutineEnd(snapshot));
    thisScheduler.add(inst2RoutineBegin(snapshot));
    thisScheduler.add(inst2RoutineEachFrame(snapshot));
    thisScheduler.add(inst2RoutineEnd(snapshot));
    thisScheduler.add(inst3RoutineBegin(snapshot));
    thisScheduler.add(inst3RoutineEachFrame(snapshot));
    thisScheduler.add(inst3RoutineEnd(snapshot));
    const pract_maxLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(pract_maxLoopBegin, pract_maxLoopScheduler);
    thisScheduler.add(pract_maxLoopScheduler);
    thisScheduler.add(pract_maxLoopEnd);
    thisScheduler.add(run1_strtRoutineBegin(snapshot));
    thisScheduler.add(run1_strtRoutineEachFrame(snapshot));
    thisScheduler.add(run1_strtRoutineEnd(snapshot));
    thisScheduler.add(mainInstRoutineBegin(snapshot));
    thisScheduler.add(mainInstRoutineEachFrame(snapshot));
    thisScheduler.add(mainInstRoutineEnd(snapshot));
    thisScheduler.add(InstRoutineBegin(snapshot));
    thisScheduler.add(InstRoutineEachFrame(snapshot));
    thisScheduler.add(InstRoutineEnd(snapshot));
    const run1LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(run1LoopBegin, run1LoopScheduler);
    thisScheduler.add(run1LoopScheduler);
    thisScheduler.add(run1LoopEnd);
    thisScheduler.add(run2_strtRoutineBegin(snapshot));
    thisScheduler.add(run2_strtRoutineEachFrame(snapshot));
    thisScheduler.add(run2_strtRoutineEnd(snapshot));
    thisScheduler.add(InstRoutineBegin(snapshot));
    thisScheduler.add(InstRoutineEachFrame(snapshot));
    thisScheduler.add(InstRoutineEnd(snapshot));
    const run2LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(run2LoopBegin, run2LoopScheduler);
    thisScheduler.add(run2LoopScheduler);
    thisScheduler.add(run2LoopEnd);
    thisScheduler.add(run3_strtRoutineBegin(snapshot));
    thisScheduler.add(run3_strtRoutineEachFrame(snapshot));
    thisScheduler.add(run3_strtRoutineEnd(snapshot));
    thisScheduler.add(InstRoutineBegin(snapshot));
    thisScheduler.add(InstRoutineEachFrame(snapshot));
    thisScheduler.add(InstRoutineEnd(snapshot));
    const run3LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(run3LoopBegin, run3LoopScheduler);
    thisScheduler.add(run3LoopScheduler);
    thisScheduler.add(run3LoopEnd);
    thisScheduler.add(run4_strtRoutineBegin(snapshot));
    thisScheduler.add(run4_strtRoutineEachFrame(snapshot));
    thisScheduler.add(run4_strtRoutineEnd(snapshot));
    thisScheduler.add(InstRoutineBegin(snapshot));
    thisScheduler.add(InstRoutineEachFrame(snapshot));
    thisScheduler.add(InstRoutineEnd(snapshot));
    const run4LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(run4LoopBegin, run4LoopScheduler);
    thisScheduler.add(run4LoopScheduler);
    thisScheduler.add(run4LoopEnd);
    thisScheduler.add(EndRoutineBegin(snapshot));
    thisScheduler.add(EndRoutineEachFrame(snapshot));
    thisScheduler.add(EndRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var pract_max;
function pract_maxLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  pract_max = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'pract_max'
  });
  psychoJS.experiment.addLoop(pract_max); // add the loop to the experiment
  currentLoop = pract_max;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPract_max of pract_max) {
    const snapshot = pract_max.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(pract_strtRoutineBegin(snapshot));
    thisScheduler.add(pract_strtRoutineEachFrame(snapshot));
    thisScheduler.add(pract_strtRoutineEnd(snapshot));
    thisScheduler.add(pract_instRoutineBegin(snapshot));
    thisScheduler.add(pract_instRoutineEachFrame(snapshot));
    thisScheduler.add(pract_instRoutineEnd(snapshot));
    const practiceLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(practiceLoopBegin, practiceLoopScheduler);
    thisScheduler.add(practiceLoopScheduler);
    thisScheduler.add(practiceLoopEnd);
    thisScheduler.add(loopBreakRoutineBegin(snapshot));
    thisScheduler.add(loopBreakRoutineEachFrame(snapshot));
    thisScheduler.add(loopBreakRoutineEnd(snapshot));
    thisScheduler.add(Repeat_Training_MessageRoutineBegin(snapshot));
    thisScheduler.add(Repeat_Training_MessageRoutineEachFrame(snapshot));
    thisScheduler.add(Repeat_Training_MessageRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var practice;
function practiceLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: (('Practice_' + id_expinfo) + '.csv'),
    seed: undefined, name: 'practice'
  });
  psychoJS.experiment.addLoop(practice); // add the loop to the experiment
  currentLoop = practice;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPractice of practice) {
    const snapshot = practice.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(pract_itiRoutineBegin(snapshot));
    thisScheduler.add(pract_itiRoutineEachFrame(snapshot));
    thisScheduler.add(pract_itiRoutineEnd(snapshot));
    thisScheduler.add(pract_trialsRoutineBegin(snapshot));
    thisScheduler.add(pract_trialsRoutineEachFrame(snapshot));
    thisScheduler.add(pract_trialsRoutineEnd(snapshot));
    thisScheduler.add(feedbackRoutineBegin(snapshot));
    thisScheduler.add(feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function practiceLoopEnd() {
  psychoJS.experiment.removeLoop(practice);

  return Scheduler.Event.NEXT;
}


function pract_maxLoopEnd() {
  psychoJS.experiment.removeLoop(pract_max);

  return Scheduler.Event.NEXT;
}


var run1;
function run1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  run1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: (((((('Set' + SetNum) + 'Run') + Run1) + '_') + id_expinfo) + '.csv'),
    seed: undefined, name: 'run1'
  });
  psychoJS.experiment.addLoop(run1); // add the loop to the experiment
  currentLoop = run1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRun1 of run1) {
    const snapshot = run1.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(itiRoutineBegin(snapshot));
    thisScheduler.add(itiRoutineEachFrame(snapshot));
    thisScheduler.add(itiRoutineEnd(snapshot));
    thisScheduler.add(trialsRoutineBegin(snapshot));
    thisScheduler.add(trialsRoutineEachFrame(snapshot));
    thisScheduler.add(trialsRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function run1LoopEnd() {
  psychoJS.experiment.removeLoop(run1);

  return Scheduler.Event.NEXT;
}


var run2;
function run2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  run2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: (((((('Set' + SetNum) + 'Run') + Run2) + '_') + id_expinfo) + '.csv'),
    seed: undefined, name: 'run2'
  });
  psychoJS.experiment.addLoop(run2); // add the loop to the experiment
  currentLoop = run2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRun2 of run2) {
    const snapshot = run2.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(itiRoutineBegin(snapshot));
    thisScheduler.add(itiRoutineEachFrame(snapshot));
    thisScheduler.add(itiRoutineEnd(snapshot));
    thisScheduler.add(trialsRoutineBegin(snapshot));
    thisScheduler.add(trialsRoutineEachFrame(snapshot));
    thisScheduler.add(trialsRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function run2LoopEnd() {
  psychoJS.experiment.removeLoop(run2);

  return Scheduler.Event.NEXT;
}


var run3;
function run3LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  run3 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: (((((('Set' + SetNum) + 'Run') + Run3) + '_') + id_expinfo) + '.csv'),
    seed: undefined, name: 'run3'
  });
  psychoJS.experiment.addLoop(run3); // add the loop to the experiment
  currentLoop = run3;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRun3 of run3) {
    const snapshot = run3.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(itiRoutineBegin(snapshot));
    thisScheduler.add(itiRoutineEachFrame(snapshot));
    thisScheduler.add(itiRoutineEnd(snapshot));
    thisScheduler.add(trialsRoutineBegin(snapshot));
    thisScheduler.add(trialsRoutineEachFrame(snapshot));
    thisScheduler.add(trialsRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function run3LoopEnd() {
  psychoJS.experiment.removeLoop(run3);

  return Scheduler.Event.NEXT;
}


var run4;
function run4LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  run4 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: (((((('Set' + SetNum) + 'Run') + Run4) + '_') + id_expinfo) + '.csv'),
    seed: undefined, name: 'run4'
  });
  psychoJS.experiment.addLoop(run4); // add the loop to the experiment
  currentLoop = run4;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRun4 of run4) {
    const snapshot = run4.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(itiRoutineBegin(snapshot));
    thisScheduler.add(itiRoutineEachFrame(snapshot));
    thisScheduler.add(itiRoutineEnd(snapshot));
    thisScheduler.add(trialsRoutineBegin(snapshot));
    thisScheduler.add(trialsRoutineEachFrame(snapshot));
    thisScheduler.add(trialsRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function run4LoopEnd() {
  psychoJS.experiment.removeLoop(run4);

  return Scheduler.Event.NEXT;
}


function init_conditionsLoopEnd() {
  psychoJS.experiment.removeLoop(init_conditions);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var screen_scaleComponents;
function screen_scaleRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'screen_scale'-------
    t = 0;
    screen_scaleClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    screen_scaleComponents = [];
    screen_scaleComponents.push(text_top);
    screen_scaleComponents.push(text_bottom);
    screen_scaleComponents.push(ccimage);
    
    for (const thisComponent of screen_scaleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var _pj;
var keys;
var dscale;
var continueRoutine;
function screen_scaleRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'screen_scale'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = screen_scaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys();
    if (keys.length) {
        if (((t - oldt) < 0.5)) {
            dscale = (5 * dbase);
            oldt = t;
        } else {
            dscale = dbase;
            oldt = t;
        }
        if (_pj.in_es6("space", keys)) {
            continueRoutine = false;
        } else {
            if (_pj.in_es6("up", keys)) {
                y_scale = (round(((y_scale + dscale) * 10000)) / 10000);
            } else {
                if (_pj.in_es6("down", keys)) {
                    y_scale = (round(((y_scale - dscale) * 10000)) / 10000);
                } else {
                    if (_pj.in_es6("left", keys)) {
                        x_scale = (round(((x_scale - dscale) * 10000)) / 10000);
                    } else {
                        if (_pj.in_es6("right", keys)) {
                            x_scale = (round(((x_scale + dscale) * 10000)) / 10000);
                        }
                    }
                }
            }
        }
        screen_height = (round(((vsize * 10) / y_scale)) / 10);
        text_bottom.text = (((((((("X Scale = " + x_scale.toString()) + unittext) + " per cm, Y Scale = ") + y_scale.toString()) + unittext) + " per cm\nScreen height = ") + screen_height.toString()) + " cm\n\nPress the space bar when done");
        ccimage.size = [(x_size * x_scale), (y_size * y_scale)];
    }
    
    
    // *text_top* updates
    if (t >= 0.0 && text_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_top.tStart = t;  // (not accounting for frame time here)
      text_top.frameNStart = frameN;  // exact frame index
      
      text_top.setAutoDraw(true);
    }

    
    // *text_bottom* updates
    if (t >= 0.0 && text_bottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_bottom.tStart = t;  // (not accounting for frame time here)
      text_bottom.frameNStart = frameN;  // exact frame index
      
      text_bottom.setAutoDraw(true);
    }

    
    // *ccimage* updates
    if (t >= 0.0 && ccimage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ccimage.tStart = t;  // (not accounting for frame time here)
      ccimage.frameNStart = frameN;  // exact frame index
      
      ccimage.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of screen_scaleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function screen_scaleRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'screen_scale'-------
    for (const thisComponent of screen_scaleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    thisExp.addData("X Scale", x_scale);
    thisExp.addData("Y Scale", y_scale);
    
    // the Routine "screen_scale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _inst1_keyResp_allKeys;
var inst1Components;
function inst1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'inst1'-------
    t = 0;
    inst1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    inst1_keyResp.keys = undefined;
    inst1_keyResp.rt = undefined;
    _inst1_keyResp_allKeys = [];
    // keep track of which components have finished
    inst1Components = [];
    inst1Components.push(inst_1);
    inst1Components.push(inst1_keyResp);
    
    for (const thisComponent of inst1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function inst1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'inst1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = inst1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_1* updates
    if (t >= 0.0 && inst_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_1.tStart = t;  // (not accounting for frame time here)
      inst_1.frameNStart = frameN;  // exact frame index
      
      inst_1.setAutoDraw(true);
    }

    
    // *inst1_keyResp* updates
    if (t >= 0.0 && inst1_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst1_keyResp.tStart = t;  // (not accounting for frame time here)
      inst1_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { inst1_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { inst1_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { inst1_keyResp.clearEvents(); });
    }

    if (inst1_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = inst1_keyResp.getKeys({keyList: ['space'], waitRelease: false});
      _inst1_keyResp_allKeys = _inst1_keyResp_allKeys.concat(theseKeys);
      if (_inst1_keyResp_allKeys.length > 0) {
        inst1_keyResp.keys = _inst1_keyResp_allKeys[_inst1_keyResp_allKeys.length - 1].name;  // just the last key pressed
        inst1_keyResp.rt = _inst1_keyResp_allKeys[_inst1_keyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'inst1'-------
    for (const thisComponent of inst1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst1_keyResp.keys', inst1_keyResp.keys);
    if (typeof inst1_keyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('inst1_keyResp.rt', inst1_keyResp.rt);
        routineTimer.reset();
        }
    
    inst1_keyResp.stop();
    // the Routine "inst1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _inst2_keyResp_allKeys;
var inst2Components;
function inst2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'inst2'-------
    t = 0;
    inst2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    inst_2.setImage(('Stim/' + instImg2));
    inst2_keyResp.keys = undefined;
    inst2_keyResp.rt = undefined;
    _inst2_keyResp_allKeys = [];
    // keep track of which components have finished
    inst2Components = [];
    inst2Components.push(inst_2);
    inst2Components.push(inst2_keyResp);
    
    for (const thisComponent of inst2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function inst2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'inst2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = inst2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_2* updates
    if (t >= 0.0 && inst_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_2.tStart = t;  // (not accounting for frame time here)
      inst_2.frameNStart = frameN;  // exact frame index
      
      inst_2.setAutoDraw(true);
    }

    
    // *inst2_keyResp* updates
    if (t >= 0.0 && inst2_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst2_keyResp.tStart = t;  // (not accounting for frame time here)
      inst2_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { inst2_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { inst2_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { inst2_keyResp.clearEvents(); });
    }

    if (inst2_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = inst2_keyResp.getKeys({keyList: ['space'], waitRelease: false});
      _inst2_keyResp_allKeys = _inst2_keyResp_allKeys.concat(theseKeys);
      if (_inst2_keyResp_allKeys.length > 0) {
        inst2_keyResp.keys = _inst2_keyResp_allKeys[_inst2_keyResp_allKeys.length - 1].name;  // just the last key pressed
        inst2_keyResp.rt = _inst2_keyResp_allKeys[_inst2_keyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'inst2'-------
    for (const thisComponent of inst2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst2_keyResp.keys', inst2_keyResp.keys);
    if (typeof inst2_keyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('inst2_keyResp.rt', inst2_keyResp.rt);
        routineTimer.reset();
        }
    
    inst2_keyResp.stop();
    // the Routine "inst2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _inst3_keyResp_allKeys;
var inst3Components;
function inst3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'inst3'-------
    t = 0;
    inst3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    inst_3.setImage(('Stim/' + instImg3));
    inst3_keyResp.keys = undefined;
    inst3_keyResp.rt = undefined;
    _inst3_keyResp_allKeys = [];
    // keep track of which components have finished
    inst3Components = [];
    inst3Components.push(inst_3);
    inst3Components.push(inst3_keyResp);
    
    for (const thisComponent of inst3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function inst3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'inst3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = inst3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_3* updates
    if (t >= 0.0 && inst_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_3.tStart = t;  // (not accounting for frame time here)
      inst_3.frameNStart = frameN;  // exact frame index
      
      inst_3.setAutoDraw(true);
    }

    
    // *inst3_keyResp* updates
    if (t >= 0 && inst3_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst3_keyResp.tStart = t;  // (not accounting for frame time here)
      inst3_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { inst3_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { inst3_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { inst3_keyResp.clearEvents(); });
    }

    if (inst3_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = inst3_keyResp.getKeys({keyList: ['space'], waitRelease: false});
      _inst3_keyResp_allKeys = _inst3_keyResp_allKeys.concat(theseKeys);
      if (_inst3_keyResp_allKeys.length > 0) {
        inst3_keyResp.keys = _inst3_keyResp_allKeys[_inst3_keyResp_allKeys.length - 1].name;  // just the last key pressed
        inst3_keyResp.rt = _inst3_keyResp_allKeys[_inst3_keyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'inst3'-------
    for (const thisComponent of inst3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst3_keyResp.keys', inst3_keyResp.keys);
    if (typeof inst3_keyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('inst3_keyResp.rt', inst3_keyResp.rt);
        routineTimer.reset();
        }
    
    inst3_keyResp.stop();
    // the Routine "inst3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _pract_resp_allKeys;
var pract_strtComponents;
function pract_strtRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'pract_strt'-------
    t = 0;
    pract_strtClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    pract_txt.setText('Practice block is about to begin. \n\nIn this practice block, feedback about your performance will be provided after each trial.\n\nPress SPACE bar to continue!');
    pract_resp.keys = undefined;
    pract_resp.rt = undefined;
    _pract_resp_allKeys = [];
    // keep track of which components have finished
    pract_strtComponents = [];
    pract_strtComponents.push(pract_txt);
    pract_strtComponents.push(pract_resp);
    
    for (const thisComponent of pract_strtComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function pract_strtRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'pract_strt'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = pract_strtClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pract_txt* updates
    if (t >= 0.0 && pract_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pract_txt.tStart = t;  // (not accounting for frame time here)
      pract_txt.frameNStart = frameN;  // exact frame index
      
      pract_txt.setAutoDraw(true);
    }

    
    // *pract_resp* updates
    if (t >= 0.0 && pract_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pract_resp.tStart = t;  // (not accounting for frame time here)
      pract_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pract_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pract_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pract_resp.clearEvents(); });
    }

    if (pract_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = pract_resp.getKeys({keyList: ['space'], waitRelease: false});
      _pract_resp_allKeys = _pract_resp_allKeys.concat(theseKeys);
      if (_pract_resp_allKeys.length > 0) {
        pract_resp.keys = _pract_resp_allKeys[_pract_resp_allKeys.length - 1].name;  // just the last key pressed
        pract_resp.rt = _pract_resp_allKeys[_pract_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pract_strtComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pract_strtRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'pract_strt'-------
    for (const thisComponent of pract_strtComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pract_resp.keys', pract_resp.keys);
    if (typeof pract_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pract_resp.rt', pract_resp.rt);
        routineTimer.reset();
        }
    
    pract_resp.stop();
    // the Routine "pract_strt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _practinst_resp_allKeys;
var pract_instComponents;
function pract_instRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'pract_inst'-------
    t = 0;
    pract_instClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    practinst_txt.setText(((((((('Happy Expression - Press ' + Happy) + ' arrow key') + '\n\nFearful Expression - Press ') + Fear) + ' arrow key') + '\n\nUse the index and middle fingers of your dominant hand only.') + '\n\n\n\nPress SPACE bar when ready!'));
    practinst_resp.keys = undefined;
    practinst_resp.rt = undefined;
    _practinst_resp_allKeys = [];
    // keep track of which components have finished
    pract_instComponents = [];
    pract_instComponents.push(practinst_txt);
    pract_instComponents.push(practinst_resp);
    
    for (const thisComponent of pract_instComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function pract_instRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'pract_inst'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = pract_instClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practinst_txt* updates
    if (t >= 0.0 && practinst_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practinst_txt.tStart = t;  // (not accounting for frame time here)
      practinst_txt.frameNStart = frameN;  // exact frame index
      
      practinst_txt.setAutoDraw(true);
    }

    
    // *practinst_resp* updates
    if (t >= 0.0 && practinst_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practinst_resp.tStart = t;  // (not accounting for frame time here)
      practinst_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practinst_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practinst_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practinst_resp.clearEvents(); });
    }

    if (practinst_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = practinst_resp.getKeys({keyList: ['space'], waitRelease: false});
      _practinst_resp_allKeys = _practinst_resp_allKeys.concat(theseKeys);
      if (_practinst_resp_allKeys.length > 0) {
        practinst_resp.keys = _practinst_resp_allKeys[_practinst_resp_allKeys.length - 1].name;  // just the last key pressed
        practinst_resp.rt = _practinst_resp_allKeys[_practinst_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pract_instComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pract_instRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'pract_inst'-------
    for (const thisComponent of pract_instComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practinst_resp.keys', practinst_resp.keys);
    if (typeof practinst_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practinst_resp.rt', practinst_resp.rt);
        routineTimer.reset();
        }
    
    practinst_resp.stop();
    // the Routine "pract_inst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var pract_itiComponents;
function pract_itiRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'pract_iti'-------
    t = 0;
    pract_itiClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    pract_itiComponents = [];
    pract_itiComponents.push(pract_blank);
    
    for (const thisComponent of pract_itiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function pract_itiRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'pract_iti'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = pract_itiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pract_blank* updates
    if (t >= 0.0 && pract_blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pract_blank.tStart = t;  // (not accounting for frame time here)
      pract_blank.frameNStart = frameN;  // exact frame index
      
      pract_blank.setAutoDraw(true);
    }

    frameRemains = 0.0 + ITI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pract_blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pract_blank.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pract_itiComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pract_itiRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'pract_iti'-------
    for (const thisComponent of pract_itiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "pract_iti" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _pr_emo_resp_allKeys;
var pract_trialsComponents;
function pract_trialsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'pract_trials'-------
    t = 0;
    pract_trialsClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.700000);
    // update component parameters for each repeat
    pr_face_label.bold = true;
    
    pr_face_emo.setSize([(8.6789 * x_scale), (12.0513 * y_scale)]);
    pr_face_emo.setImage(('Stim/Practice/' + emoStim));
    pr_face_label.setPos([(X_cm * x_scale), (Y_cm * y_scale)]);
    pr_face_label.setText(Label);
    pr_face_label.setHeight((1.8598 * y_scale));
    pr_emo_resp.keys = undefined;
    pr_emo_resp.rt = undefined;
    _pr_emo_resp_allKeys = [];
    // keep track of which components have finished
    pract_trialsComponents = [];
    pract_trialsComponents.push(pr_fix_cross);
    pract_trialsComponents.push(pr_face_emo);
    pract_trialsComponents.push(pr_face_label);
    pract_trialsComponents.push(pr_emo_resp);
    
    for (const thisComponent of pract_trialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function pract_trialsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'pract_trials'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = pract_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pr_fix_cross* updates
    if (t >= 0.0 && pr_fix_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pr_fix_cross.tStart = t;  // (not accounting for frame time here)
      pr_fix_cross.frameNStart = frameN;  // exact frame index
      
      pr_fix_cross.setAutoDraw(true);
    }

    frameRemains = 0.2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pr_fix_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pr_fix_cross.setAutoDraw(false);
    }
    
    // *pr_face_emo* updates
    if (t >= 0.2 && pr_face_emo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pr_face_emo.tStart = t;  // (not accounting for frame time here)
      pr_face_emo.frameNStart = frameN;  // exact frame index
      
      pr_face_emo.setAutoDraw(true);
    }

    frameRemains = 1.2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pr_face_emo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pr_face_emo.setAutoDraw(false);
    }
    
    // *pr_face_label* updates
    if (t >= 0.2 && pr_face_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pr_face_label.tStart = t;  // (not accounting for frame time here)
      pr_face_label.frameNStart = frameN;  // exact frame index
      
      pr_face_label.setAutoDraw(true);
    }

    frameRemains = 0.2 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pr_face_label.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pr_face_label.setAutoDraw(false);
    }
    
    // *pr_emo_resp* updates
    if (t >= 0.2 && pr_emo_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pr_emo_resp.tStart = t;  // (not accounting for frame time here)
      pr_emo_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pr_emo_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pr_emo_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pr_emo_resp.clearEvents(); });
    }

    frameRemains = 1.7  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pr_emo_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pr_emo_resp.status = PsychoJS.Status.FINISHED;
  }

    if (pr_emo_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = pr_emo_resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _pr_emo_resp_allKeys = _pr_emo_resp_allKeys.concat(theseKeys);
      if (_pr_emo_resp_allKeys.length > 0) {
        pr_emo_resp.keys = _pr_emo_resp_allKeys[0].name;  // just the first key pressed
        pr_emo_resp.rt = _pr_emo_resp_allKeys[0].rt;
        // was this correct?
        if (pr_emo_resp.keys == corrResp) {
            pr_emo_resp.corr = 1;
        } else {
            pr_emo_resp.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pract_trialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pract_trialsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'pract_trials'-------
    for (const thisComponent of pract_trialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (pr_emo_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrResp)) {
         pr_emo_resp.corr = 1;  // correct non-response
      } else {
         pr_emo_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('pr_emo_resp.keys', pr_emo_resp.keys);
    psychoJS.experiment.addData('pr_emo_resp.corr', pr_emo_resp.corr);
    if (typeof pr_emo_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pr_emo_resp.rt', pr_emo_resp.rt);
        }
    
    pr_emo_resp.stop();
    return Scheduler.Event.NEXT;
  };
}


var feedback;
var fdbkCol;
var feedbackComponents;
function feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    if ((pr_emo_resp.keys !== undefined)) {
        if ((pr_emo_resp.corr === 1)) {
            feedback = "\u2714";
            fdbkCol = [1, 1, 1];
        } else {
            if ((pr_emo_resp.corr === 0)) {
                feedback = "\u2718";
                fdbkCol = [1, 1, 1];
            }
        }
    } else {
        feedback = "missed";
        fdbkCol = [1, 1, 1];
    }
    
    text_3.setColor(new util.Color(fdbkCol));
    text_3.setText(feedback);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(text_3);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var nCorr;
var eachResp;
var trainRepMsg;
var loopBreakComponents;
function loopBreakRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'loopBreak'-------
    t = 0;
    loopBreakClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // Get all correct
    nCorr = 0
    eachResp = 0
    for (eachResp=0; eachResp<psychoJS.experiment._trialsData.length; eachResp++) 
    {
      if ('pr_emo_resp.corr' in psychoJS.experiment._trialsData[eachResp]) {
        nCorr += psychoJS.experiment._trialsData[eachResp]['pr_emo_resp.corr'];
      }
    }
    
    if (currentLoop.thisRepN == 2)
      {
        trainRepMsg = "Good Job! Let us proceed to the Main Experiment.";
      }
    else
      {
        if (nCorr >= 18) 
        {
          trials.finished = true;  // to end any loop, use 'trials'
          trainRepMsg = "Good Job! Let us proceed to the Main Experiment.";
        }
        else
        {
          trainRepMsg = "Sorry, you didn't seem to grasp the task. We need to repeat the Training block one more time.";
        }
      }
    // keep track of which components have finished
    loopBreakComponents = [];
    
    for (const thisComponent of loopBreakComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function loopBreakRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'loopBreak'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = loopBreakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of loopBreakComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function loopBreakRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'loopBreak'-------
    for (const thisComponent of loopBreakComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "loopBreak" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _ifrepeat_resp_allKeys;
var Repeat_Training_MessageComponents;
function Repeat_Training_MessageRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Repeat_Training_Message'-------
    t = 0;
    Repeat_Training_MessageClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    ifrepeat.setText((trainRepMsg + '\n\n\nPress SPACE bar when ready!'));
    ifrepeat_resp.keys = undefined;
    ifrepeat_resp.rt = undefined;
    _ifrepeat_resp_allKeys = [];
    // keep track of which components have finished
    Repeat_Training_MessageComponents = [];
    Repeat_Training_MessageComponents.push(ifrepeat);
    Repeat_Training_MessageComponents.push(ifrepeat_resp);
    
    for (const thisComponent of Repeat_Training_MessageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Repeat_Training_MessageRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Repeat_Training_Message'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Repeat_Training_MessageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ifrepeat* updates
    if (t >= 0.0 && ifrepeat.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ifrepeat.tStart = t;  // (not accounting for frame time here)
      ifrepeat.frameNStart = frameN;  // exact frame index
      
      ifrepeat.setAutoDraw(true);
    }

    
    // *ifrepeat_resp* updates
    if (t >= 0.0 && ifrepeat_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ifrepeat_resp.tStart = t;  // (not accounting for frame time here)
      ifrepeat_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ifrepeat_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ifrepeat_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ifrepeat_resp.clearEvents(); });
    }

    if (ifrepeat_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = ifrepeat_resp.getKeys({keyList: ['space'], waitRelease: false});
      _ifrepeat_resp_allKeys = _ifrepeat_resp_allKeys.concat(theseKeys);
      if (_ifrepeat_resp_allKeys.length > 0) {
        ifrepeat_resp.keys = _ifrepeat_resp_allKeys[_ifrepeat_resp_allKeys.length - 1].name;  // just the last key pressed
        ifrepeat_resp.rt = _ifrepeat_resp_allKeys[_ifrepeat_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Repeat_Training_MessageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Repeat_Training_MessageRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Repeat_Training_Message'-------
    for (const thisComponent of Repeat_Training_MessageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ifrepeat_resp.keys', ifrepeat_resp.keys);
    if (typeof ifrepeat_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ifrepeat_resp.rt', ifrepeat_resp.rt);
        routineTimer.reset();
        }
    
    ifrepeat_resp.stop();
    // the Routine "Repeat_Training_Message" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _run1_keyresp_allKeys;
var run1_strtComponents;
function run1_strtRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'run1_strt'-------
    t = 0;
    run1_strtClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    run1_txt.setText('Practice block has ended.\n\nInstructions for Main Experiment blocks will follow on next screen.\n\n\nPress SPACE bar when ready!');
    run1_keyresp.keys = undefined;
    run1_keyresp.rt = undefined;
    _run1_keyresp_allKeys = [];
    // keep track of which components have finished
    run1_strtComponents = [];
    run1_strtComponents.push(run1_txt);
    run1_strtComponents.push(run1_keyresp);
    
    for (const thisComponent of run1_strtComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function run1_strtRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'run1_strt'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = run1_strtClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *run1_txt* updates
    if (t >= 0.0 && run1_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      run1_txt.tStart = t;  // (not accounting for frame time here)
      run1_txt.frameNStart = frameN;  // exact frame index
      
      run1_txt.setAutoDraw(true);
    }

    
    // *run1_keyresp* updates
    if (t >= 0.0 && run1_keyresp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      run1_keyresp.tStart = t;  // (not accounting for frame time here)
      run1_keyresp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { run1_keyresp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { run1_keyresp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { run1_keyresp.clearEvents(); });
    }

    if (run1_keyresp.status === PsychoJS.Status.STARTED) {
      let theseKeys = run1_keyresp.getKeys({keyList: ['space'], waitRelease: false});
      _run1_keyresp_allKeys = _run1_keyresp_allKeys.concat(theseKeys);
      if (_run1_keyresp_allKeys.length > 0) {
        run1_keyresp.keys = _run1_keyresp_allKeys[_run1_keyresp_allKeys.length - 1].name;  // just the last key pressed
        run1_keyresp.rt = _run1_keyresp_allKeys[_run1_keyresp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of run1_strtComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function run1_strtRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'run1_strt'-------
    for (const thisComponent of run1_strtComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('run1_keyresp.keys', run1_keyresp.keys);
    if (typeof run1_keyresp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('run1_keyresp.rt', run1_keyresp.rt);
        routineTimer.reset();
        }
    
    run1_keyresp.stop();
    // the Routine "run1_strt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _mainkeyResp_allKeys;
var mainInstComponents;
function mainInstRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'mainInst'-------
    t = 0;
    mainInstClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    mainInst_txt.setText((((((((((('On each trial, an image of a face will appear. As before, your task is to determine whether you saw "Happy" or "Fearful" expression.' + '\n\n\n\nIf you think that you saw "Happy", press the ') + Happy) + ' arrow button.') + '\n\nIf you think that you saw "Fearful", press the ') + Fear) + ' arrow button.') + '\n\nUse the index and middle fingers of your dominant hand only. Do not use the other hand for responding.') + '\n\n\nUnlike the training block, no feedback about your performance will be provided to you after each trial.') + '\n\n\n\nIt is very important that you keep your eyes fixated on the center of the screen at all times and respond as quickly and accurately as possible.') + '\n\n\n\nPress SPACE bar to continue.'));
    mainkeyResp.keys = undefined;
    mainkeyResp.rt = undefined;
    _mainkeyResp_allKeys = [];
    // keep track of which components have finished
    mainInstComponents = [];
    mainInstComponents.push(mainInst_txt);
    mainInstComponents.push(mainkeyResp);
    
    for (const thisComponent of mainInstComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function mainInstRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'mainInst'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = mainInstClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mainInst_txt* updates
    if (t >= 0.0 && mainInst_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mainInst_txt.tStart = t;  // (not accounting for frame time here)
      mainInst_txt.frameNStart = frameN;  // exact frame index
      
      mainInst_txt.setAutoDraw(true);
    }

    
    // *mainkeyResp* updates
    if (t >= 0.0 && mainkeyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mainkeyResp.tStart = t;  // (not accounting for frame time here)
      mainkeyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { mainkeyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { mainkeyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { mainkeyResp.clearEvents(); });
    }

    if (mainkeyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = mainkeyResp.getKeys({keyList: ['space'], waitRelease: false});
      _mainkeyResp_allKeys = _mainkeyResp_allKeys.concat(theseKeys);
      if (_mainkeyResp_allKeys.length > 0) {
        mainkeyResp.keys = _mainkeyResp_allKeys[_mainkeyResp_allKeys.length - 1].name;  // just the last key pressed
        mainkeyResp.rt = _mainkeyResp_allKeys[_mainkeyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of mainInstComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function mainInstRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'mainInst'-------
    for (const thisComponent of mainInstComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('mainkeyResp.keys', mainkeyResp.keys);
    if (typeof mainkeyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('mainkeyResp.rt', mainkeyResp.rt);
        routineTimer.reset();
        }
    
    mainkeyResp.stop();
    // the Routine "mainInst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _inst_resp_allKeys;
var InstComponents;
function InstRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Inst'-------
    t = 0;
    InstClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    inst_txt.setText(((((((('Happy - Press ' + Happy) + ' arrow key') + '\n\nFearful - Press ') + Fear) + ' arrow key') + '\n\nUse the index and middle fingers of your dominant hand only.') + '\n\n\n\nPress SPACE bar when ready!'));
    inst_resp.keys = undefined;
    inst_resp.rt = undefined;
    _inst_resp_allKeys = [];
    // keep track of which components have finished
    InstComponents = [];
    InstComponents.push(inst_txt);
    InstComponents.push(inst_resp);
    
    for (const thisComponent of InstComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function InstRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Inst'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = InstClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_txt* updates
    if (t >= 0.0 && inst_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_txt.tStart = t;  // (not accounting for frame time here)
      inst_txt.frameNStart = frameN;  // exact frame index
      
      inst_txt.setAutoDraw(true);
    }

    
    // *inst_resp* updates
    if (t >= 0.0 && inst_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_resp.tStart = t;  // (not accounting for frame time here)
      inst_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { inst_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { inst_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { inst_resp.clearEvents(); });
    }

    if (inst_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = inst_resp.getKeys({keyList: ['space'], waitRelease: false});
      _inst_resp_allKeys = _inst_resp_allKeys.concat(theseKeys);
      if (_inst_resp_allKeys.length > 0) {
        inst_resp.keys = _inst_resp_allKeys[_inst_resp_allKeys.length - 1].name;  // just the last key pressed
        inst_resp.rt = _inst_resp_allKeys[_inst_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Inst'-------
    for (const thisComponent of InstComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst_resp.keys', inst_resp.keys);
    if (typeof inst_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('inst_resp.rt', inst_resp.rt);
        routineTimer.reset();
        }
    
    inst_resp.stop();
    // the Routine "Inst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var itiComponents;
function itiRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'iti'-------
    t = 0;
    itiClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    itiComponents = [];
    itiComponents.push(iti_blank);
    
    for (const thisComponent of itiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function itiRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'iti'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = itiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *iti_blank* updates
    if (t >= 0.0 && iti_blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iti_blank.tStart = t;  // (not accounting for frame time here)
      iti_blank.frameNStart = frameN;  // exact frame index
      
      iti_blank.setAutoDraw(true);
    }

    frameRemains = 0.0 + ITI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (iti_blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      iti_blank.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of itiComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function itiRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'iti'-------
    for (const thisComponent of itiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "iti" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _emo_resp_allKeys;
var trialsComponents;
function trialsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trials'-------
    t = 0;
    trialsClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.700000);
    // update component parameters for each repeat
    face_label.bold = true;
    
    face_emo.setSize([(8.6789 * x_scale), (12.0513 * y_scale)]);
    face_emo.setImage(('Stim/Main/' + emoStim));
    face_label.setPos([(X_cm * x_scale), (Y_cm * y_scale)]);
    face_label.setText(Label);
    face_label.setHeight((1.8598 * y_scale));
    emo_resp.keys = undefined;
    emo_resp.rt = undefined;
    _emo_resp_allKeys = [];
    // keep track of which components have finished
    trialsComponents = [];
    trialsComponents.push(fix_cross1);
    trialsComponents.push(face_emo);
    trialsComponents.push(face_label);
    trialsComponents.push(emo_resp);
    
    for (const thisComponent of trialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trialsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trials'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_cross1* updates
    if (t >= 0.0 && fix_cross1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross1.tStart = t;  // (not accounting for frame time here)
      fix_cross1.frameNStart = frameN;  // exact frame index
      
      fix_cross1.setAutoDraw(true);
    }

    frameRemains = 0.2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cross1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cross1.setAutoDraw(false);
    }
    
    // *face_emo* updates
    if (t >= 0.2 && face_emo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      face_emo.tStart = t;  // (not accounting for frame time here)
      face_emo.frameNStart = frameN;  // exact frame index
      
      face_emo.setAutoDraw(true);
    }

    frameRemains = 1.2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (face_emo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      face_emo.setAutoDraw(false);
    }
    
    // *face_label* updates
    if (t >= 0.2 && face_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      face_label.tStart = t;  // (not accounting for frame time here)
      face_label.frameNStart = frameN;  // exact frame index
      
      face_label.setAutoDraw(true);
    }

    frameRemains = 0.2 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (face_label.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      face_label.setAutoDraw(false);
    }
    
    // *emo_resp* updates
    if (t >= 0.2 && emo_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      emo_resp.tStart = t;  // (not accounting for frame time here)
      emo_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { emo_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { emo_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { emo_resp.clearEvents(); });
    }

    frameRemains = 1.7  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (emo_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      emo_resp.status = PsychoJS.Status.FINISHED;
  }

    if (emo_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = emo_resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _emo_resp_allKeys = _emo_resp_allKeys.concat(theseKeys);
      if (_emo_resp_allKeys.length > 0) {
        emo_resp.keys = _emo_resp_allKeys[0].name;  // just the first key pressed
        emo_resp.rt = _emo_resp_allKeys[0].rt;
        // was this correct?
        if (emo_resp.keys == corrResp) {
            emo_resp.corr = 1;
        } else {
            emo_resp.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trials'-------
    for (const thisComponent of trialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (emo_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrResp)) {
         emo_resp.corr = 1;  // correct non-response
      } else {
         emo_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('emo_resp.keys', emo_resp.keys);
    psychoJS.experiment.addData('emo_resp.corr', emo_resp.corr);
    if (typeof emo_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('emo_resp.rt', emo_resp.rt);
        }
    
    emo_resp.stop();
    return Scheduler.Event.NEXT;
  };
}


var _run2_keyresp_allKeys;
var run2_strtComponents;
function run2_strtRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'run2_strt'-------
    t = 0;
    run2_strtClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    run2_txt.setText('Block 1 has ended.\n\nBlock 2 is about to begin.\n\nTake some rest, press SPACE bar when ready!');
    run2_keyresp.keys = undefined;
    run2_keyresp.rt = undefined;
    _run2_keyresp_allKeys = [];
    // keep track of which components have finished
    run2_strtComponents = [];
    run2_strtComponents.push(run2_txt);
    run2_strtComponents.push(run2_keyresp);
    
    for (const thisComponent of run2_strtComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function run2_strtRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'run2_strt'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = run2_strtClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *run2_txt* updates
    if (t >= 0.0 && run2_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      run2_txt.tStart = t;  // (not accounting for frame time here)
      run2_txt.frameNStart = frameN;  // exact frame index
      
      run2_txt.setAutoDraw(true);
    }

    
    // *run2_keyresp* updates
    if (t >= 0.0 && run2_keyresp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      run2_keyresp.tStart = t;  // (not accounting for frame time here)
      run2_keyresp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { run2_keyresp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { run2_keyresp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { run2_keyresp.clearEvents(); });
    }

    if (run2_keyresp.status === PsychoJS.Status.STARTED) {
      let theseKeys = run2_keyresp.getKeys({keyList: ['space'], waitRelease: false});
      _run2_keyresp_allKeys = _run2_keyresp_allKeys.concat(theseKeys);
      if (_run2_keyresp_allKeys.length > 0) {
        run2_keyresp.keys = _run2_keyresp_allKeys[_run2_keyresp_allKeys.length - 1].name;  // just the last key pressed
        run2_keyresp.rt = _run2_keyresp_allKeys[_run2_keyresp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of run2_strtComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function run2_strtRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'run2_strt'-------
    for (const thisComponent of run2_strtComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('run2_keyresp.keys', run2_keyresp.keys);
    if (typeof run2_keyresp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('run2_keyresp.rt', run2_keyresp.rt);
        routineTimer.reset();
        }
    
    run2_keyresp.stop();
    // the Routine "run2_strt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _run3_keyresp_allKeys;
var run3_strtComponents;
function run3_strtRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'run3_strt'-------
    t = 0;
    run3_strtClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    run3_txt.setText('Block 2 has ended.\n\nBlock 3 is about to begin.\n\nTake some rest, press SPACE bar when ready!');
    run3_keyresp.keys = undefined;
    run3_keyresp.rt = undefined;
    _run3_keyresp_allKeys = [];
    // keep track of which components have finished
    run3_strtComponents = [];
    run3_strtComponents.push(run3_txt);
    run3_strtComponents.push(run3_keyresp);
    
    for (const thisComponent of run3_strtComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function run3_strtRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'run3_strt'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = run3_strtClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *run3_txt* updates
    if (t >= 0.0 && run3_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      run3_txt.tStart = t;  // (not accounting for frame time here)
      run3_txt.frameNStart = frameN;  // exact frame index
      
      run3_txt.setAutoDraw(true);
    }

    
    // *run3_keyresp* updates
    if (t >= 0.0 && run3_keyresp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      run3_keyresp.tStart = t;  // (not accounting for frame time here)
      run3_keyresp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { run3_keyresp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { run3_keyresp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { run3_keyresp.clearEvents(); });
    }

    if (run3_keyresp.status === PsychoJS.Status.STARTED) {
      let theseKeys = run3_keyresp.getKeys({keyList: ['space'], waitRelease: false});
      _run3_keyresp_allKeys = _run3_keyresp_allKeys.concat(theseKeys);
      if (_run3_keyresp_allKeys.length > 0) {
        run3_keyresp.keys = _run3_keyresp_allKeys[_run3_keyresp_allKeys.length - 1].name;  // just the last key pressed
        run3_keyresp.rt = _run3_keyresp_allKeys[_run3_keyresp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of run3_strtComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function run3_strtRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'run3_strt'-------
    for (const thisComponent of run3_strtComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('run3_keyresp.keys', run3_keyresp.keys);
    if (typeof run3_keyresp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('run3_keyresp.rt', run3_keyresp.rt);
        routineTimer.reset();
        }
    
    run3_keyresp.stop();
    // the Routine "run3_strt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _run4_keyresp_allKeys;
var run4_strtComponents;
function run4_strtRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'run4_strt'-------
    t = 0;
    run4_strtClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    run4_txt.setText('Block 3 has ended.\n\nBlock 4 is about to begin.\n\nTake some rest, press SPACE bar when ready! ');
    run4_keyresp.keys = undefined;
    run4_keyresp.rt = undefined;
    _run4_keyresp_allKeys = [];
    // keep track of which components have finished
    run4_strtComponents = [];
    run4_strtComponents.push(run4_txt);
    run4_strtComponents.push(run4_keyresp);
    
    for (const thisComponent of run4_strtComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function run4_strtRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'run4_strt'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = run4_strtClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *run4_txt* updates
    if (t >= 0.0 && run4_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      run4_txt.tStart = t;  // (not accounting for frame time here)
      run4_txt.frameNStart = frameN;  // exact frame index
      
      run4_txt.setAutoDraw(true);
    }

    
    // *run4_keyresp* updates
    if (t >= 0.0 && run4_keyresp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      run4_keyresp.tStart = t;  // (not accounting for frame time here)
      run4_keyresp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { run4_keyresp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { run4_keyresp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { run4_keyresp.clearEvents(); });
    }

    if (run4_keyresp.status === PsychoJS.Status.STARTED) {
      let theseKeys = run4_keyresp.getKeys({keyList: ['space'], waitRelease: false});
      _run4_keyresp_allKeys = _run4_keyresp_allKeys.concat(theseKeys);
      if (_run4_keyresp_allKeys.length > 0) {
        run4_keyresp.keys = _run4_keyresp_allKeys[_run4_keyresp_allKeys.length - 1].name;  // just the last key pressed
        run4_keyresp.rt = _run4_keyresp_allKeys[_run4_keyresp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of run4_strtComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function run4_strtRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'run4_strt'-------
    for (const thisComponent of run4_strtComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('run4_keyresp.keys', run4_keyresp.keys);
    if (typeof run4_keyresp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('run4_keyresp.rt', run4_keyresp.rt);
        routineTimer.reset();
        }
    
    run4_keyresp.stop();
    // the Routine "run4_strt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var EndComponents;
function EndRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'End'-------
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(endblank);
    EndComponents.push(key_resp_2);
    EndComponents.push(text_2);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function EndRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'End'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endblank* updates
    if (t >= 0.0 && endblank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endblank.tStart = t;  // (not accounting for frame time here)
      endblank.frameNStart = frameN;  // exact frame index
      
      endblank.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (endblank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      endblank.setAutoDraw(false);
    }
    
    // *key_resp_2* updates
    if (t >= 2.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    frameRemains = 2.0 + 8.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_2.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_2* updates
    if (t >= 2.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 2.0 + 8.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'End'-------
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  document.body.style.cursor='auto';
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
