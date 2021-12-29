export function ColorPicker({ onToggleColorPicker,onChangeBgColor, id }) {
    const colors = ['#fbbc04', '##ccff90', '#a7ffeb', '#d7aefb', '#e6c9a8', '#f28b82']
    

    function onSelectedColor(color) {
        onChangeBgColor(color, id);
        onToggleColorPicker(false)
    }
    return (
        <div className="color-picker">
            {colors.map(color => {
                return <div
                    onClick={() => onSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    key={color}
                    className="color-value">
                </div>
            })}

        </div>
    )
}
