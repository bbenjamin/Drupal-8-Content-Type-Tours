# Content Type Tours for Drupal 8
This is an enhancement to Drupal's Tour module 
https://www.drupal.org/docs/8/core/modules/tour/overview

##Add Tours To Node Forms##

Content Type Tours gives users the ability to create content type specific tours on node forms.
They can also provide different tours for node-add vs. node-edit forms.

Currently, tours can only be assigned to routes, which provides no way to distinguish the content type of a node form.

After enabling this module, the "Make this a node tour" option will be added to Tour UI. 
This will expose additional fields that allow you to assign a tour to a content type's edit/add form instead of a route.

## Tour steps will open tabs and fieldsets as needed ##
This module also addresses an issue that should eventually make its way into Drupal core, but at the time of writing 
this it's been idle for 6 months (no judgement - Core is a very complex project!). This is an interim solution.
https://www.drupal.org/project/drupal/issues/2911208 

If a tour step is attached to an ID that is not visible due to being inside a closed fieldset or inactive tab,
the tab/fieldset will become active before the tour advances to the next step.


