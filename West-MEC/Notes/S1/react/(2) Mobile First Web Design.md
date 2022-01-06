**File Structure**

//////////////////////////////////////////////////////////////////

**7 folders - 1 file**

Sass developed the 7 folder structure to organixe all of the sass partial files that you will be creating.  
The one file outside of the folders is the main styles that you import all of the other work into.

*util folder*

This folder contains all of the variables including colors and sizes.  
_variable.scss  
_functions.scss  
_mixins.scss  

*base folder*

This folder containes all of the defauls that you will use.  
_reset.scss (resets to what you define it as)   
_typograpghy.scss (fonts)  

*components folder*

This will be a robust folder that holds a bunch of smaller pieces of the site.   

_buttons.scss   
_carousel.scss   
_slider.scss   
_modal.scss   
_slideshow.scss   

*layout folder*

These are pieces of the site that will always be visible or define the layout of the site.

_navbar.scss  
_grid.scss  
_header.scss  
_footer.scss  
_sidebar.scss  
_forms.scss  

*pages folder*

These are specific pages tht your site will have.   
These dont have a ton of styles in them but in case you need something special for that page you can do it here.

_home.scss  
_about.scss  
_contact.scss  
_error.scss  

*themes folder*

These are where you will add different themes like light and dark mode.   
It is also recommended to add an admin theme so thay people know when they are in charge.

_theme.scss  
_defaultTheme.scss  
_light.scss  
_darkTheme.scss  
_admin.scss  

*vendors folder*

This is an optional folder but you will use this for any libraries that you need/ install.

_bootstrap.scss  
_jquery-ui.scss  
_chartjs.scss  

*Main.scss*

THIS FILE WILL HAVE NO STYLES IN IT.   
main.scss is there to collect all of the other styles into 1 place.   
When you compile this file into 1 css everything should woek nicer.   
Make sure you import in otder of least specific to most specific.  

The order of importance is:

@use 'util/';
@use 'vendors/';
@use 'base/';
@use 'layout/';
@use 'pages/';
@use 'components/';
@use 'themes/';

/////////////////////////////////////////////////////////////////////////////////////////////////////////

**Dart Sass**

THe newest version of sass, called Dart, added 2 new features:
They replace @import with @use if you want to import a partial into your file for use.
They also added @foward which is a really convienient way to export your files.

*@foward*

The @foward rule is used in an index file that allows yout to export a large amount of partials with 1 import.

*@use*

Remember that @improt is deprecated and we use @use now.
You can @use any file that you want but we are going to use it to import partials to:
index.scss files and main.scss files.

*Variables*

Variables are just like js, a name representing a value that you can use in other files. These are created using '$' but make sure to keep the names descriptive.

Ex: $clr-white: #fff;

*@use variables*

All variables should be kept on a variables file, you cna make several if needed but 1 is preferred.

Once imported you need to make sure that you call them like we do for objects.
@use '.../themes/defaultTheme';

.question{
    padding: 1rem 1.5rem;
    border: 2px solid defaultTheme.$clr-grey;
}

Declaring the file names first then the variables

*shortcut*

Just like importing files in js we can rename the @use to make it easier to use.

@use '.../themes/defaultTheme' as c;

.question{
    padding: 1rem 1.5rem;
    border: 2px solid c.$clr-grey;
}

*shorter-cut*

DO NOT USE THIS IF YOU HAVE SEVERAL VARIABLE FILES

You can use * to give your variables the ability to be called with no name.

@use '.../themes/defaultTheme' as *;

.question{
    padding: 1rem 1.5rem;
    border: 2px solid $clr-grey;
}

*@content*

One more amazing tool added to dart sass was @content.
This takes anything in the brackets and distributes it.

EX: @mixin input-placeholder{
    &.placeholder{@content}
}