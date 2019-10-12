# PsychoPy_misc
[PsychoPy] - issues that i ran into during designing experiments

### Issue#1 
Horizontal shifting of `TextStim`, `RatingScale`, `ImageStim` etc. in newer version of psychopy (v3.2 onwards)

**Threads of people facing similar issues:** 

- `pos` attribute of stimulus presentatin in psychopy is working differently. 
- incorrect position of text after upgrading to 3.2.3, [**See full issue here**](https://discourse.psychopy.org/t/incorrect-position-of-text-after-upgrading-to-3-2-3/9227 "see on PsychoPy discourse")
- visual.TextStim doesnt draw text in the center of the screen in the new version of psychopy,  [**See full issue here**](https://discourse.psychopy.org/t/visual-textstim-doesnt-draw-text-in-the-center-of-the-screen-in-the-new-version-of-psychopy/9374 "see on PsychoPy discourse")
- TextStims are being positioned correctly on Windows but not on Linux,  [**See full issue here**](https://discourse.psychopy.org/t/textstims-are-being-positioned-correctly-on-windows-but-not-on-linux/9273 "see on PsychoPy discourse")
- Off-center display strangeness,  [**See full issue here**](https://discourse.psychopy.org/t/off-center-stimulus-display-strangeness/2195 "see on PsychoPy discourse")

The problem is due to the most recent version (v1.4 onwards) of package `pyglet`. It is dependency package for `PsychoPy`.

**Solution-**

Revert this `pyglet` package back to an older version - 
- if you have **PsychoPy2**, `pip install pyglet == 1.2.4`
- or if you use, **PsychoPy3**, `pip install pyglet == 1.3.2`

This should solve the issue during stimuli presentation.

### Issue#2
