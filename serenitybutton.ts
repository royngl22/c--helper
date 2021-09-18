protected getButtons(): Serenity.ToolButton[] {
            let buttons = super.getButtons();
            //var btn = Q.first(buttons, x => x.cssClass == "tool-button save-and-close-button");
            //btn.title = "Lock MRP";

            let saveAndCloseBtn: Serenity.ToolButton = buttons[0];
            saveAndCloseBtn.title = "Add New Site";

            let applyButton: Serenity.ToolButton = buttons[1];
            applyButton.visible = false;
              
            //applyButton.title = Q.text("TEST");
            //applyButton.title = "TEST";
            

            let deleteBtn: Serenity.ToolButton = buttons[2];
            //deleteBtn.title = Q.text("Site.MyDialogName.DeleteText"); // In Texts.cs
            deleteBtn.title = "TEXT"

            //Add a Button
            buttons.push({
                title: "Add New Site",
                hint: "add new site",
                cssClass: "tool-button save-and-close-button",
                icon: "fa-hand-lizard-o"
            })

            return buttons;
        }


//title dialog
protected updateTitle() {
            this.dialogTitle = "Your title ";
        }
