import { initIntegration } from 'integration/index';
import {
  selectableApp,
  folders,
  tags,
} from 'integration/selectors';

const initialSelectedTags = [
  '5ace4cbbbfbcb25277a2e83b',
];

// out of order to test sorting by name
const initialTags = [
  {
    _id: '5ace4c9ebfbcb25277a2e838',
    name: 'Folder B',
    isFolder: true,
    parent: null,
    ancestors: [],
  },
  {
    _id: '5ace4c99bfbcb25277a2e837',
    name: 'Folder A',
    isFolder: true,
    parent: null,
    ancestors: [],
  },
  {
    _id: '5ace4cc2bfbcb25277a2e83c',
    name: 'Tag 2',
    isFolder: false,
    parent: null,
    ancestors: [],
  },
  {
    _id: '5ace4cbbbfbcb25277a2e83b',
    name: 'Tag 1',
    isFolder: false,
    parent: null,
    ancestors: [],
  },
];

const app = selectableApp(initIntegration({
  tags: initialTags,
  selectedTags: initialSelectedTags,
}));

it('shows the root folder name in the header', () => {
  expect(app.currentFolderName()).toEqual('Root Folder');
});

it('does not show the back button', () => {
  expect(app.backButton().length).toEqual(0);
});

it('shows the correct folders within the current folder', () => {
  const displayedFolders = folders.in(app.currentFolder());

  expect(displayedFolders.length).toEqual(2);
  expect(folders.nameOf(displayedFolders.first())).toEqual('Folder A');
  expect(folders.nameOf(displayedFolders.last())).toEqual('Folder B');
});

it('shows the correct tags within the current folder in the correct order', () => {
  const displayedTags = tags.in(app.currentFolder());

  expect(displayedTags.length).toEqual(2);
  expect(tags.nameOf(displayedTags.first())).toEqual('Tag 1');
  expect(tags.nameOf(displayedTags.last())).toEqual('Tag 2');
});

it('shows the initially selected tags as selected', () => {
  const displayedTags = tags.in(app.currentFolder());

  expect(tags.checkboxFor(displayedTags.first()).props().checked).toBe(true);
  expect(tags.checkboxFor(displayedTags.last()).props().checked).toBe(false);
});
