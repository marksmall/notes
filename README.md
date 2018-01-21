# Notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Application Skeleton

The skeleton for this application was built using `ng new notes --style=scss`

## Setup/Run

Once cloned, run `yarn install`, this will install all dependencies, then to start the application,
run `yarn start`.

## Further Improvements

This app could be improved by adding validation to the **Notes Detail** form to improve user feedback
as to when you can save the form, at the moment, you can save with no content.

The structure of the form model could be improved, rather than have individual properties for what's 
being edited, we could clone the original Note, if editing and overwrite values from it if we implement
the **reset** functionality.
