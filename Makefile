LIB_DIR := library.blocks
LIB_SCSS := $(wildcard $(LIB_DIR)/*.scss)
COMMON_DIR := common.blocks
COMMON_SCSS := $(wildcard $(COMMON_DIR)/*.scss)
DIST := bundles

$(DIST)/styles.min.css: $(DIST)/styles.css
	css-minify -f $(DIST)/styles.css -o $(DIST)

$(DIST)/styles.css: $(LIB_SCSS) $(COMMON_SCSS) 
	sass $(COMMON_DIR)/styles.scss $(DIST)/styles.css

.PHONY: clean

clean:
	rm $(DIST)/styles.css $(DIST)/styles.css.map $(DIST)/styles.min.css