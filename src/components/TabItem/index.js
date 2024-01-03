// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    onClickTab(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : 'tab-btn'

  return (
    <li>
      <button
        type="button"
        className={activeTabBtnClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
