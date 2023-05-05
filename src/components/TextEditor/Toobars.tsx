import clsx from 'clsx';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

type StyleButtonProps = {
  onClick?: () => void;
  onToggle?: (style: string) => void;
  active?: boolean;
  className?: string;
  style?: string;
  label: string;
  icon?: React.ReactNode;
};

const StyleButton = (props: StyleButtonProps) => {
  const handleMouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    props?.onToggle!(props.style || '');
  };

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();

    if (props?.onClick) {
      props.onClick();
    }
  };

  const className = clsx(
    'cursor-pointer  rounded-md  inline-block px-1 text-center mx-2',
    !props.active && 'text-gray-100 hover:text-gray-900 hover:bg-gray-100',
    props.active && 'bg-green-100 text-green-500 font-bold',
    props.className
  );

  return (
    <span
      className={className}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      {props.icon ? props.icon : props.label}
    </span>
  );
};

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one', icon: '' },
  { label: 'H2', style: 'header-two', icon: '' },
  { label: 'H3', style: 'header-three', icon: '' },
  { label: 'H4', style: 'header-four', icon: '' },
  { label: 'H5', style: 'header-five', icon: '' },
  { label: 'H6', style: 'header-six', icon: '' },
  { label: 'Blockquote', style: 'blockquote', icon: '' },
  { label: 'UL', style: 'unordered-list-item', icon: '' },
  { label: 'OL', style: 'ordered-list-item', icon: '' },
  { label: 'Code Block', style: 'code-block', icon: '' },
];

const BlockStyleControls = (props: any) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="toolbar__controls">
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          icon={type.icon}
        />
      ))}
    </div>
  );
};

var INLINE_STYLES = [
  {
    label: 'Bold',
    style: 'BOLD',
    icon: <FormatBoldIcon className="text-md" />,
  },
  {
    label: 'Italic',
    style: 'ITALIC',
    icon: <FormatItalicIcon className="text-md" />,
  },
  {
    label: 'Underline',
    style: 'UNDERLINE',
    icon: <FormatUnderlinedIcon className="text-md" />,
  },
  { label: 'Monospace', style: 'CODE', icon: '' },
];

const InlineStyleControls = (props: any) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="toolbar__controls">
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          icon={type.icon}
        />
      ))}
    </div>
  );
};

export { BlockStyleControls };
export { InlineStyleControls };
