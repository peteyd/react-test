import { clickable, changeable } from 'integration/decorators';

/* eslint-disable no-param-reassign */
export const selectableApp = (app) => {
  app.currentFolder = () => app.find('CurrentFolder');

  app.currentFolderContents = () => app.find('FolderContents');

  app.currentFolderName = () => app.find('.current-folder-name').text();

  app.backButton = () => clickable(app.find('BackButton .back-button'));

  return app;
};
/* eslint-enable no-param-reassign */

export const folders = {
  in: (folderWrapper) => folderWrapper.find('Folder'),
  linkTo: (folderElement) => clickable(folderElement.find('.folder-link')),
  nameOf: (folderElement) => folderElement.find('.folder-name').text(),
};

export const tags = {
  in: (folderContainer) => folderContainer.find('Tag'),
  checkboxFor: (tagElement) => changeable(tagElement.find('input')),
  nameOf: (tagElement) => tagElement.find('label').text(),
};
