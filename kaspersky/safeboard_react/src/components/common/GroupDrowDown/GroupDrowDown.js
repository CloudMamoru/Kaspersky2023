const GroupDrowDown = (props) => {
  return (
    <div className='select is-small'>
      <select onChange={props.getGroupField}>
        <option value='CDN/Managers'>CDN/Managers</option>
        <option value='CDN/Financials'>CDN/Financials</option>
        <option value='CDN/Top Kvants'>CDN/Top Kvants</option>
        <option value='CDN/Human resources'>CDN/Human resources</option>
        <option value='CDN/Kvants'>CDN/Kvants</option>
        <option value='CDN/Sales'>CDN/Sales</option>
        <option value='CDN/Outsourced'>CDN/Outsourced</option>
        <option value='CDN/ITSupplys'>CDN/ITSupplys</option>
        <option value='CDN/BackendDev'>CDN/BackendDev</option>
        <option value='CDN/FrontendDev'>CDN/FrontendDev</option>
        <option value='CDN/Designer'>CDN/Designer</option>
        <option value='Unmanaged'>Unmanaged</option>
      </select>
    </div>
  );
};

export default GroupDrowDown;
