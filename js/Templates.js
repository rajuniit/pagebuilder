Templates = {};
Templates.AddColumn = '<div class="modal-body"> <a class="btn btn-primary columnEle" data-type="1"><i class="icon-plus icon-white"></i> One Column</a> <a class="btn btn-primary columnEle" data-type="2"><i class="icon-plus icon-white"></i> Two Column</a> <a class="btn btn-primary columnEle" data-type="3"><i class="icon-plus icon-white"></i> Three Column</a> <a class="btn btn-primary columnEle" data-type="4"><i class="icon-plus icon-white"></i> Four Column</a> </div>';
Templates.Column = '<a href="javascript:void(0);" class="btn btn-success add-row js-add-element"><i class="icon-plus"></i>Add Element</a> ';
Templates.ColumnElement = '<div class="span4 col-box" id="box_4"> <div class="col-box-options"> <a href="#"><i class="icon-edit"></i></a> <a href="#"><i class="icon-asterisk settings-options" data-id="4"></i></a> <a href="#"><i class="icon-remove remove-me"></i></a> </div> <a href="javascript:void(0);" class="btn btn-success add-element btn-mini" data-id="4"><i class="icon-plus"></i> Add Element</a> </div> ';
Templates.OptionsToolbar = '';
Templates.Row = '<% if(columns.size() == 0) { %> <div class="js-row-region"> <div class="row-options" style="display: none;"> <a href="#"><i class="icon-edit"></i></a> <a href="#"><i class="icon-asterisk settings-options"></i></a> <a href="#"><i class="icon-remove remove-me"></i></a> </div> <a href="javascript:void(0);" class="btn btn-success add-row js-add-column"><i class="icon-plus"></i>Add Column</a> </div> <% } %> <div class="js-column-region"> </div> ';
Templates.RowColumn = '<div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <h3>Add New Column</h3> </div> <div class="modal-body"> <h4>Simple Layouts</h4> <a class="btn btn-primary columnEle" data-type="1"><i class="icon-plus icon-white"></i> One Column</a> <a class="btn btn-primary columnEle" data-type="2"><i class="icon-plus icon-white"></i> Two Column</a> <a class="btn btn-primary columnEle" data-type="3"><i class="icon-plus icon-white"></i> Three Column</a> <a class="btn btn-primary columnEle" data-type="4"><i class="icon-plus icon-white"></i> Four Column</a> </div>';
Templates.RowListLayout = '<div id="rows-region"></div> <div id="panel-region"></div>';
Templates.RowListPanel = '<a href="javascript:void(0);" class="btn add-row btn-mini js-add-row"><i class="icon-plus"></i>Add Row</a>';
Templates.StaticRow = '<a href="javascript:void(0);" class="btn btn-success add-row"><i class="icon-plus"></i> Add Row</a>';
