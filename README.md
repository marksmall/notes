# Notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Application Skeleton

The skeleton for this application was built using `ng new notes --style=scss`

## Setup/Run

Ensure you have the latest long term support for **NodJS v8.9.1** as this is what the application was
developed against.

I perfer `yarn`, but you can use `npm` if you wish.

Once cloned, run `yarn install`, this will install all dependencies, then to start the application,
run `yarn start`.

## Further Improvements

This app could be improved by adding validation to the **Notes Detail** form to improve user feedback
as to when you can save the form, at the moment, you can save with no content.

The structure of the form model could be improved, rather than have individual properties for what's 
being edited, we could clone the original Note. Then, if editing, we could provide **reset** function 
 as well as disabling the **Save** and **Reset** buttons dependent on the form state.

Test components thoroughly, the tests at the moment are just stubs.

Hook up the application with **TravisCI**, so tests/linting are always run.
