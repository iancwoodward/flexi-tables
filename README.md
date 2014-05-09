flexi-tables
============

<h4>A JQuery Plugin for Responsive HTML Tables</h4>
<em>(This was developed with JQuery 1.11.0 but will probably work with most versions below that.)</em>

  This plugin is designed to make HTML tables fully responsive by wrapping information into a single column at a specified window width. It is meant to be very generic in nature so can be easily applied to just about any kind of data set, whether very simple or very complex, and can even be applied to multiple tables on a single page.

  <strong>Files Required — </strong>
    <ul>
      <li>flexi_tables.css</li>
      <li>flexi_tables.js</li>
    </ul>
    
  <h6>To make a flexi-table start with a semantic HTML table</h6>
    <ul>
      <li>
        In the ```<table>``` tag add a data attribute of flexi-table. &#8674; ```<table data-flexi-table>```
      </li>
      <li>
        To define custom headers for the collapsed table, give the flexi-table data tag comma deliniated values 
        based on what ```<td>``` html content you want to appear in each sub-table. (i.e. if you want content from the first
        and second ```<td>``` element then  ---> ```<table data-flexi-table="0, 1">``` [Note that these are based on array index 
        values so they start at '0'])
      </li>
      <li>
        To add deliniators between ```<td>``` content that is placed in the custom headers add a data tag of flexi-deliniator.
        You can give it a value equal to the type of deliniator you want between each content set, or leave it blank to add
        extra space between them with no character between.
      </li>
    </ul>
        
        This --->             <table data-flexi-table="0, 1" data-flexi-deliniator="|">
          
        Will result in --->   <th class="flexiTableTitle">
                                  [content from the 1st td tag in the data set] 
                                      <span class="flexiTableDeliniator">|</span> 
                                  [content from the 2nd td tag in the data set] 
                              </th>
  
  <strong>Built in CSS classes —</strong>
    <ul>
      <li><strong>.flexiTableTitle</strong>  (The <th> for the sub-tables created when the table is collapsed.)</li>
      <li><strong>.flexiTableDeliniator</strong> (A ```<span>``` surrounding the spacers between content in the custom header, these can be empty.)</li>
      <li><strong>.flexiTableLabel</strong> (```<th>``` tags with display:block and float:left to act as a ```<td>``` when the table is collapsed.)</li>
    </ul>
  
  <strong>Features to be added —</strong>
    <ul>
      <li>ie8 support (intent is for the plugin to degrade gracefully)</li>
      <li>fixed headers for full width and collapsed views</li>
      <li>data shuffling / content sorting for full width and collapsed views</li>
    </ul>
    
    
