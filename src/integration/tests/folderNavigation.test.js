import { initIntegration } from 'integration/index';
import {
  selectableApp,
  folders,
  tags,
} from 'integration/selectors';

const initialSelectedTags = [];

const initialTags = [
  {
    _id: '5ace4c9ebfbcb25277a2e838',
    name: 'Folder A',
    isFolder: true,
    parent: null,
    ancestors: [],
  },
  {
    _id: '5ace4c99bfbcb25277a2e837',
    name: 'Folder A.1',
    isFolder: true,
    parent: '5ace4c9ebfbcb25277a2e838',
    ancestors: [],
  },
  {
    _id: '5ace4cc2bfbcb25277a2e83c',
    name: 'Tag 1',
    isFolder: false,
    parent: null,
    ancestors: [],
  },
  {
    _id: '5ace4cbbbfbcb25277a2e83b',
    name: 'Tag 2',
    isFolder: false,
    parent: '5ace4c9ebfbcb25277a2e838',
    ancestors: [],
  },
];

const app = selectableApp(initIntegration({
  tags: initialTags,
  selectedTags: initialSelectedTags,
}));

const firstFolder = () => folders.in(app.currentFolder()).first();
const firstTag = () => tags.in(app.currentFolder()).first();

describe('Folder navigation', () => {
  beforeAll(() => {
    folders.linkTo(firstFolder()).click();
  });

  it('should display the clicked folder as the current folder', () => {
    expect(app.currentFolderName()).toEqual('Folder A');
  });

  it('should display the child tags and folders of the new current folder', () => {
    const displayedFolders = folders.in(app.currentFolder());
    expect(displayedFolders.length).toEqual(1);
    expect(folders.nameOf(displayedFolders.first())).toEqual('Folder A.1');
  });

  it('clicking into an empty folder should display that folder as empty', () => {
    folders.linkTo(firstFolder()).click();
    expect(app.currentFolderContents().text()).toEqual('This folder is empty');
  });

  it('clicking the back button twice should display the root folder', () => {
    app.backButton().click();
    app.backButton().click();

    expect(app.currentFolderName()).toEqual('Root Folder');
  });

  it('should preserve the tag selection when navigation away and back', () => {
    // first tag should start unchecked
    expect(tags.checkboxFor(firstTag()).props().checked).toBe(false);

    tags.checkboxFor(firstTag()).change();

    // first tag should be checked once toggled
    expect(tags.checkboxFor(firstTag()).props().checked).toBe(true);

    // navigate away and back
    folders.linkTo(firstFolder()).click();
    app.backButton().click();

    // first tag should remain checked once we return to the folder
    expect(tags.checkboxFor(firstTag()).props().checked).toBe(true);
  });
});
