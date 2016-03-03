Documents.panel.Home = function (config) {
	config = config || {};
	Ext.apply(config, {
		baseCls: 'modx-formpanel',
		layout: 'anchor',
		/*
		 stateful: true,
		 stateId: 'documents-panel-home',
		 stateEvents: ['tabchange'],
		 getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
		 */
		hideMode: 'offsets',
		items: [{
			html: '<h2>' + _('documents') + '</h2>',
			cls: '',
			style: {margin: '15px 0'}
		}, {
			xtype: 'modx-tabs',
			defaults: {border: false, autoHeight: true},
			border: true,
			hideMode: 'offsets',
			items: [{
				title: _('documents_items'),
				layout: 'anchor',
				items: [{
					html: _('documents_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'documents-grid-items',
					cls: 'main-wrapper',
				}]
			}]
		}]
	});
	Documents.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(Documents.panel.Home, MODx.Panel);
Ext.reg('documents-panel-home', Documents.panel.Home);
