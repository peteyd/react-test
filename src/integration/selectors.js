export const currentFolderFor = (app) => app.find('CurrentFolder');

export const headerFor = (currentFolder) => currentFolder.find('.header');

export const backButtonFor = (currentFolder) => currentFolder.find('BackButton .back-button');

export const folders = {
  in: (folderContainer) => folderContainer.find('Folder'),
  linkTo: (folderElement) => folderElement.find('.folder-link'),
  nameOf: (folderElement) => folderElement.find('.folder-name').text(),
};

export const tags = {
  in: (folderContainer) => folderContainer.find('Tag'),
  checkboxFor: (tagElement) => tagElement.find('input'),
  nameOf: (tagElement) => tagElement.find('label').text(),
};
