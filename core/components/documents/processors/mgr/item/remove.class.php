<?php

/**
 * Remove an Items
 */
class DocumentsItemRemoveProcessor extends modObjectProcessor {
	public $objectType = 'DocumentsItem';
	public $classKey = 'DocumentsItem';
	public $languageTopics = array('documents');
	//public $permission = 'remove';


	/**
	 * @return array|string
	 */
	public function process() {
		if (!$this->checkPermissions()) {
			return $this->failure($this->modx->lexicon('access_denied'));
		}

		$ids = $this->modx->fromJSON($this->getProperty('ids'));
		if (empty($ids)) {
			return $this->failure($this->modx->lexicon('documents_item_err_ns'));
		}

		foreach ($ids as $id) {
			/** @var DocumentsItem $object */
			if (!$object = $this->modx->getObject($this->classKey, $id)) {
				return $this->failure($this->modx->lexicon('documents_item_err_nf'));
			}

			$object->remove();
		}

		return $this->success();
	}

}

return 'DocumentsItemRemoveProcessor';